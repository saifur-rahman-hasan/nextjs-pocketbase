'use client';

import React from 'react'
import Link from "next/link";

export default function PocketbaseSignUpSuccessPage() {
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="bg-white py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Activate Account</h2>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Your Account has been created. Check your email to activate your account ot contact with System Admin.
							</p>
						</div>

						<div className="mt-10 flex items-center gap-x-6">
							<Link
								href={`/auth/login`}
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Login to your account
							</Link>

							<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
								Need help? <span aria-hidden="true" className={`inline-block ml-5`}>→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


