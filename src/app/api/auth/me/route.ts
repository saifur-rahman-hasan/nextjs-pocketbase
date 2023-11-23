import db, {initPocketBase} from "@/db";
import ApiResponse from "@/core/ApiResponse";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
	try {
		const pb = await initPocketBase(request, response)
		const authId = pb.authStore.model?.id

		const user = await pb.collection('users').getOne(authId)

		// const authStore = pb.authStore.isAuthRecord
		return ApiResponse.success(user, 'You are logged in')
	} catch (err: any) {
		return ApiResponse.error(err)
	}
}