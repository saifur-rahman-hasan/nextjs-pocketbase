import db from "@/db";
import ApiResponse from "@/core/ApiResponse";
import {NextRequest} from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { name, email, password } = await request.json();

		const result = await db.register(
			name,
			email,
			password
		);

		return ApiResponse.success(result);
	} catch (err: any) {
		return ApiResponse.error(err, 'Failed to create new user')
	}
}