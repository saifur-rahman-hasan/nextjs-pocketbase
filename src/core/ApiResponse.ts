import { NextResponse } from "next/server";

class ApiResponse {
	static success(data: any, message: string = "") {
		return this.json(
			{
				success: true,
				message,
				data,
			},
			{ status: 200 }
		);
	}

	static error(e: any, message: string | null = null) {
		return this.json(
			{
				success: false,
				message: message || e?.message,
				data: e?.response?.data || null,
			},
			{ status: 500 }
		);
	}

	static created(data: any, message: string = "") {
		return this.json(
			{
				success: true,
				message,
				data,
			},
			{ status: 201 }
		);
	}

	static deleted() {
		return this.json({ success: true }, { status: 204 });
	}

	static unauthorized() {
		return this.json(
			{ success: false, message: "Unauthorized Access" },
			{ status: 401 }
		);
	}

	static notFound(message = "Not Found") {
		return this.json({ error: message }, { status: 404 });
	}

	static internalServerError(message = "Internal Server Error") {
		return this.json({ error: message }, { status: 500 });
	}

	static json(body: any, options: any) {
		return NextResponse.json(body, options);
	}
}

export default ApiResponse;
