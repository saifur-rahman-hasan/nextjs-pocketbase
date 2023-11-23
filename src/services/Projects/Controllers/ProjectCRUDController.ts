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

			return ApiResponse.success(query)
		}catch (e) {
			return ApiResponse.error(e)
		}
	}

	async create() {
		try {
			const requestData = await this.getReqData()

			return ApiResponse.created(this.getReqBody())
		}catch (e) {
			return ApiResponse.error(e)
		}
	}


	async show() {
		try {
			const requestData = await this.getReqData(true)

			return ApiResponse.success(requestData)
		}catch (e) {
			return ApiResponse.error(e)
		}
	}

	async update() {
		try {
			const requestData = await this.getReqData(true)
			return ApiResponse.success(requestData)
		}catch (e) {
			return ApiResponse.error(e)
		}
	}

	async delete() {
		try {
			const requestData = await this.getReqData(true)
			return ApiResponse.deleted()
		}catch (e) {
			return ApiResponse.error(e)
		}
	}
}
