'use client';

import React from 'react'
import { BrandLogo } from "@/components/core/BrandLogo";
import PocketbaseLoginForm from "@/services/Pocketbase/Views/Components/PocketbaseLoginForm";


export default function PocketbaseLoginPage() {
	return (
		<>
			<div className="bg-gray-100 flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<BrandLogo />
					<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<PocketbaseLoginForm />
			</div>
		</>
	)
}
