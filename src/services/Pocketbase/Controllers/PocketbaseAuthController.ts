import {ApiController} from "@/core/ApiController";
import {NextRequest, NextResponse} from "next/server";
import ApiResponse from "@/core/ApiResponse";

export default class PocketbaseAuthController extends ApiController {
	constructor(request: NextRequest, response: NextResponse) {
		super(request, response);
	}

	async login() {
		try {
			return ApiResponse.success({}, 'Logged in success.')
		}catch (e) {
			return ApiResponse.error(e)
		}
	}
}