import ApiResponse from "@/core/ApiResponse";
import {NextRequest, NextResponse} from "next/server";
import ProjectCRUDController from "@/services/Projects/Controllers/ProjectCRUDController";

export async function GET(
	request: NextRequest,
	{params}: {params: {projectId: string}},
	response: NextResponse
) {
	try {

		const projectId = params.projectId
		const controller = new ProjectCRUDController(request, response)

		return await controller.show(projectId)

	}catch (e: any) {
		return ApiResponse.error(e)
	}
}



export async function PUT(
	request: NextRequest,
	{params}: {params: {projectId: string}},
	response: NextResponse
) {
	try {
		const projectId = params.projectId
		const controller = new ProjectCRUDController(request, response)

		return await controller.update(projectId)

	}catch (e: any) {
		return ApiResponse.error(e)
	}
}

export async function DELETE(
	request: NextRequest,
	{params}: {params: {projectId: string}},
	response: NextResponse
) {
	try {
		const projectId = params.projectId
		const controller = new ProjectCRUDController(request, response)

		return await controller.delete(projectId)

	}catch (e: any) {
		return ApiResponse.error(e)
	}
}
