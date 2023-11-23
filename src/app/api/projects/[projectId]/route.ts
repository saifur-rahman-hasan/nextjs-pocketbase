import ApiResponse from "@/core/ApiResponse";
import {NextRequest, NextResponse} from "next/server";
import {initPocketBase} from "@/db";

export async function GET(
	request: NextRequest,
	{params}: {params: {projectId: string}},
	response: NextResponse
) {
	try {
		const projectId = params.projectId
		const pb = await initPocketBase(request, response)

		// you can also fetch a record by calling getOne
		const record = await pb.collection('projects').getOne(projectId);

		return ApiResponse.success(record)

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
		const reqData = await request.json()
		const pb = await initPocketBase(request, response)

		// you can also fetch a record by calling getOne
		const record = await pb.collection('projects').getOne(projectId);
		let updatableRecordData = {
			name: reqData?.name || record.name,
			status: reqData?.status || record.status,
		}

		const updatedRecord = await pb.collection('projects')
			.update(projectId, updatableRecordData)

		return ApiResponse.success(updatedRecord)

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
		const pb = await initPocketBase(request, response)
		await pb.collection('projects').delete(projectId);

		return ApiResponse.deleted()

	}catch (e: any) {
		return ApiResponse.error(e)
	}
}
