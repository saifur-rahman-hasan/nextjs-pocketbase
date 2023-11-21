import db from "@/db";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
	try {
		// you can also fetch all records at once via getFullList
		const records = await db.client.collection('projects').getFullList({
			sort: '-created',
		});

		console.log(`records`, records)

		return NextResponse.json(records)

	}catch (e: any) {
		return NextResponse.json(e.message)
	}
}



