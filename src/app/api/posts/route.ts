import db from "@/db";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
	try {
		// you can also fetch all records at once via getFullList
		const records = await db.client.collection('posts').getFullList({
			sort: '-created',
		});

		// // or fetch only the first record that matches the specified filter
		// const record = await pb.collection('posts').getFirstListItem('someField="test"', {
		// 	expand: 'relField1,relField2.subRelField',
		// });

		return NextResponse.json(records)

	}catch (e: any) {
		return NextResponse.json(e.message)
	}
}



