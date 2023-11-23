import {ApiController} from "@/core/ApiController";
import {NextRequest, NextResponse} from "next/server";
import ApiResponse from "@/core/ApiResponse";
import {initPocketBase} from "@/db";
import {CRUDApiMethods} from "@/core/CoreInterfaces";

export default class ProjectCRUDController extends ApiController implements CRUDApiMethods{

	constructor(request: NextRequest, response: NextResponse) {
		super(request, response);
	}

	async getPocketbase() {
		return await initPocketBase(this.request, this.response)
	}

	async index() {
		try {
			const query = await this.getReqData()
			const pb = await this.getPocketbase()

			// you can also fetch all records at once via getFullList
			const records = await pb.collection('projects')
				.getFullList({
					sort: '-created',
				});

			return ApiResponse.success(records)
		}catch (e) {
			return ApiResponse.error(e)
		}
	}

	async store() {
		try {
			const requestData: any = await this.getReqData()
			const pb = await this.getPocketbase()

			const recordData = {
				name: requestData.name,
				status: requestData.status,
				createdBy: pb.authStore.model?.id
			}

			// you can also fetch all records at once via getFullList
			const newRecord = await pb.collection('projects')
				.create(recordData);

			return ApiResponse.success(newRecord)

		}catch (e) {
			return ApiResponse.error(e)
		}
	}


	async show(id: string) {
		try {
			const pb = await this.getPocketbase()

			// you can also fetch a record by calling getOne
			const record = await pb.collection('projects')
				.getOne(id);

			return ApiResponse.success(record)

		}catch (e) {
			return ApiResponse.error(e)
		}
	}

	async update(id: string) {
		try {
			const requestData: any = await this.getReqData(true)
			const pb = await this.getPocketbase()

			const record = await pb.collection('projects')
				.getOne(id);

			let updatableRecordData = {
				name: requestData?.name || record.name,
				status: requestData?.status || record.status,
			}

			const updatedRecord = await pb.collection('projects')
				.update(id, updatableRecordData)

			return ApiResponse.success(updatedRecord)
		}catch (e) {
			return ApiResponse.error(e)
		}
	}

	async delete(id: string) {
		try {
			const pb = await this.getPocketbase()
			await pb.collection('projects').delete(id);

			return ApiResponse.deleted()
		}catch (e) {
			return ApiResponse.error(e)
		}
	}
}
