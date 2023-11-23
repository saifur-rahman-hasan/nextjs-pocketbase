import PocketBase from 'pocketbase';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import {NextRequest, NextResponse} from "next/server";

export const POCKET_BASE_URL = "http://127.0.0.1:8090";

export class DatabaseClient {
	// the instance of PocketBase
	client: PocketBase;

	constructor () {
		// instantiate PocketBase before we use
		this.client = new PocketBase(POCKET_BASE_URL);
	}

	// authenticate handles the authentication of the user
	async authenticate (email: string, password: string) {
		try {
			const result = await this.client
				.collection("users")
				.authWithPassword(email, password);

			// If there is no token in the result, it means something went wrong
			if (!result?.token) {
				throw new Error("Invalid email or password");
			}

			return Promise.resolve(result)
		} catch (err) {
			console.error(err);
			return Promise.reject(err || "Invalid email or password")
		}
	}

	// register handles the creation of a new user
	async register (
		name: string,
		email: string,
		password: string
	) {
		try {
			const userRoleId = "dmv9kyl7139aa1s"

			// We provide only the minimum required fields by user create method
			const result = await this.client.collection("users").create({
				name,
				email,
				password,
				passwordConfirm: password,
				emailVisibility: true,
				role: userRoleId
			});

			const verificationRequest = await this.client.collection('users').requestVerification(email);
			console.log(`verificationRequest`, verificationRequest)

			return Promise.resolve(result);
		} catch (err: any) {
			return Promise.reject(err)
		}
	}

	// isAuthenticated takes cookieStore from the request to check for the required tokens in the cookie
	async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
		const cookie = cookieStore.get('pb_auth');
		if (!cookie) {
			return false;
		}


		// loadFromCookie applies the cookie data before checking the user is authenticated
		this.client.authStore.loadFromCookie(cookie?.value || '');
		return this.client.authStore.isValid || false
	}

	// getUser is similar to isAuthenticated, the only difference is the returned data type
	async getUser(cookieStore: ReadonlyRequestCookies) {
		const cookie = cookieStore.get('pb_auth');
		if (!cookie) {
			return false;
		}

		this.client.authStore.loadFromCookie(cookie?.value || '');
		return this.client.authStore.model ;
	}

	async signOut() {
		this.client.authStore.clear();
		return true
	}
}

// We create an instance of the DatabaseClient that can be used throughout the app.
export const db = new DatabaseClient();

export default db;



// you can place this helper in a separate file so that it can be reused
export async function initPocketBase(req: NextRequest, res: NextResponse) {
	const authCookie: any = req.cookies.get('pb_auth');
	const pb = new PocketBase(POCKET_BASE_URL);


	// load the store data from the request cookie string
	pb.authStore.loadFromCookie(authCookie?.value, 'pb_auth')

	// send back the default 'pb_auth' cookie to the client with the latest store state
	// pb.authStore.onChange(() => {
	// 	res?.setHeader('set-cookie', pb.authStore.exportToCookie());
	// });

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
		pb.authStore.isValid && await pb.collection('users').authRefresh();
	} catch (_) {
		// clear the auth store on failed refresh
		pb.authStore.clear();
	}

	return pb
}