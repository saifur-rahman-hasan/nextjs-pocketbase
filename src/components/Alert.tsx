import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export function AlertError({
	hasError,
	error,
}: {hasError?: boolean, error: any}) {

	if(!hasError){ return null}

	const errorContent = typeof error === 'string' ? error : error?.data?.message || JSON.stringify(error)

	return (
		<div className="border-l-4 border-red-400 bg-red-50 p-4">
			<div className="flex">
				<div className="flex-shrink-0">
					<ExclamationTriangleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
				</div>
				<div className="ml-3">
					<p className="text-sm text-red-700">
						{errorContent}
					</p>
				</div>
			</div>
		</div>
	)
}
