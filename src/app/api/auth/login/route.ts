import db from "@/db";
import { cookies } from 'next/headers';
import ApiResponse from "@/core/ApiResponse";

export async function POST(request: Request) {
	try {

		const { identity, password } = await request.json();
		const result = await db.authenticate(identity, password);
		const {record, token} = result;
		record.token = token;
		cookies().set('pb_auth', db.client.authStore.exportToCookie());

		return ApiResponse.success(record, 'You are logged in')
	} catch (err: any) {
		return ApiResponse.error(err)
	}
}