import ApiResponse from "@/core/ApiResponse";
import PocketbaseAuthController from "@/services/Pocketbase/Controllers/PocketbaseAuthController";
import {NextRequest, NextResponse} from "next/server";

export async function POST(
	request: NextRequest,
	response: NextResponse
) {
	try {

		return await (new PocketbaseAuthController(request, response)).login()

	} catch (err: any) {
		return ApiResponse.error(err)
	}
}