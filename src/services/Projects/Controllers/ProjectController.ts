import {ApiController} from "@/core/ApiController";
import {NextRequest, NextResponse} from "next/server";
import ApiResponse from "@/core/ApiResponse";

export default class MyController extends ApiController {
	constructor(request: NextRequest, response: NextResponse) {
		super(request, response);
	}

	async myMethod() {
		try {
			return ApiResponse.success({}, 'Logged in success.')
		}catch (e) {
			return ApiResponse.error(e)
		}
	}
}