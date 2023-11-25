"use client"

import db from "@/db";
import clsx from "clsx";
import React, {useEffect} from "react";

export default function PBSignOutButton(){
	const [reload, setReload] = React.useState<boolean>(false)

	const handleSignOutClick = async () => {
		setReload(true)
		const signOutResponse = await db.signOut()
	}

	useEffect(() => {}, [reload])

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