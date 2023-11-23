import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export function AlertError({
	hasError,
	error,
}: {hasError?: boolean, error: string}) {

	if(!hasError){ return null}

	return (
		<div className="border-l-4 border-red-400 bg-red-50 p-4">
			<div className="flex">
				<div className="flex-shrink-0">
					<ExclamationTriangleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
				</div>
				<div className="ml-3">
					<p className="text-sm text-red-700">
						{error}
					</p>
				</div>
			</div>
		</div>
	)
}
