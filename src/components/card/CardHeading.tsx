import React, {ReactNode} from "react";

interface CardHeadingProps {
	title: string,
	description?: string,
	actions?: ReactNode
}

export function CardTitle({title}: { title: string }) {
	return (
		<h3 className="text-base font-semibold leading-6 text-gray-900">{ title }</h3>
	);
}

export function CardDescription({description}: { description?: string }) {
	if(!description){ return null }

	return (
		<p className="mt-1 text-sm text-gray-500">
			{description}
		</p>
	)
}

export function CardHeading({ title, description, actions }: CardHeadingProps) {
	return (
		<div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
			<div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div className="-ml-2 mt-4">
					<CardTitle title={title} />

					<CardDescription description={description} />
				</div>

				<div className="ml-4 mt-4 flex-shrink-0">
					{ actions }
				</div>
			</div>
		</div>
	)
}