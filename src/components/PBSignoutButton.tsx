"use client"

import db from "@/db";
import clsx from "clsx";

export default function PBSignOutButton(){
	return (
		<button
			onClick={async () => {
				if(await db.signOut()){

				}
			}}
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