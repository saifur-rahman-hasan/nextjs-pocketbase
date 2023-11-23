import {initPocketBase} from "@/db";
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
		const pb = await initPocketBase(request, response)
		const reqData = await request.json();

		const recordData = {
			name: reqData.name,
			status: reqData.status,
			createdBy: pb.authStore.model?.id
		}

		// you can also fetch all records at once via getFullList
		const newRecord = await pb.collection('projects')
			.create(recordData);

		return ApiResponse.success(newRecord)

	}catch (e: any) {
		return ApiResponse.error(e)
	}
}
