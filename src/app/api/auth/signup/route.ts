import db from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { name, email, password } = await request.json();
		const result = await db.register(
			name,
			email,
			password
		);
		console.log(`result`, result)
		return NextResponse.json(result);
	} catch (err: any) {
		return new Response(
			JSON.stringify({ error: err.message || err.toString() }),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
	}
}