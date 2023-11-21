"use client"

import db from "@/db";
import clsx from "clsx";

export default function PBSignOutButton(){

	const handleSignOutClick = async () => {
		const signOutResponse = await db.signOut()

		console.log(`signOutResponse`, signOutResponse)

	}


	return (
		<button
			onClick={handleSignOutClick}
			className={clsx(
				'w-full text-left ',
				'hover:bg-gray-50',
				'block px-3 py-1 text-sm leading-6 text-gray-900'
			)}
		>
			Sign Out
		</button>
	)
}