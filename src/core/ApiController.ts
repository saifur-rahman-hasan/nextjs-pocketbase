import {NextRequest, NextResponse} from "next/server";

export abstract class ApiController {
	protected request: NextRequest
	protected response: NextResponse
	protected requestSearchParams: any;

	protected constructor(
		req: NextRequest,
		res: NextResponse
	) {
		this.request = req
		this.response = res
		this.requestSearchParams = req.nextUrl.searchParams
	}

	async getReqBody() {
		return await this.request.json()
	}

	async getReqQuery() {
		return await this.requestSearchParams
	}

	async getReqData(combine: boolean = false) {
		let data = {};

		if (this.requestMethodIs('GET')) {
			data = await this.getReqQuery();
		} else if (this.requestMethodIs(['POST', 'PUT', 'PATCH', 'DELETE'])) {
			data = await this.getReqBody();

			if (combine) {
				const queryData = await this.getReqQuery();
				data = { ...queryData, ...data };
			}
		}

		return data;
	}


	requestMethodIs(verb: string | string[]) {
		return Array.isArray(verb)
			? verb.includes(this.request.method)
			: this.request.method === verb;
	}



	validateRequest() {

	}
}

export interface ApiCrudController {
	index(): any;
	create(): any;
	show(id: any): any;
	update(id: any): any;
	delete(id: any): any;
}