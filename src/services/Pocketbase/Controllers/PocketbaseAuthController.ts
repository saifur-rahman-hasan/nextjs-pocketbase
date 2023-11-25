import {ApiController} from "@/core/ApiController";
import {NextRequest, NextResponse} from "next/server";
import ApiResponse from "@/core/ApiResponse";
import db from "@/db";
import {cookies} from "next/headers";

export default class PocketbaseAuthController extends ApiController {
	constructor(request: NextRequest, response: NextResponse) {
		super(request, response);
	}

	async login() {
		try {
			let {
				email,
				username,
				identity,
				password
			} = await this.getReqBody();


			if(!identity && email){
				identity = email
			} else if(!identity && !email && username){
				identity = username
			}

			const result = await db.authenticate(identity, password);
			const {record, token} = result;
			record.token = token;

			cookies().set('pb_auth', db.client.authStore.exportToCookie());

			return ApiResponse.success(record, 'Logged in success.')
		}catch (e) {
			return ApiResponse.error(e)
		}
	}
}