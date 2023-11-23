import ApiResponse from "@/core/ApiResponse";
import {NextRequest, NextResponse} from "next/server";
import ProjectCRUDController from "@/services/Projects/Controllers/ProjectCRUDController";


export async function GET(request: NextRequest, response: NextResponse) {
	try {

		const controller = new ProjectCRUDController(request, response)
		return await controller.index()

	}catch (e: any) {
		return ApiResponse.error(e)
	}
}


export async function POST(request: NextRequest, response: NextResponse) {
	try {

		const controller = new ProjectCRUDController(request, response)
		return await controller.store()

	}catch (e: any) {
		return ApiResponse.error(e)
	}
}
