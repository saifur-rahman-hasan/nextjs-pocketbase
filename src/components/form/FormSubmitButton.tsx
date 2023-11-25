import React from "react";
import LoadingCircle from "@/components/loaders/LoadingCircle";

interface FormSubmitButtonProps {
	text: string
	loading?: boolean
	disabled?: boolean,
	className?: string,
}

export default function FormSubmitButton({
	                                         text,
	                                         loading,
	                                         disabled,
	                                         className,
                                         }: FormSubmitButtonProps) {

	const defaultClassName = "flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

	return (
		<>
			<button
				type="submit"
				className={className || defaultClassName}
				disabled={loading || disabled}
			>
				{ loading && <LoadingCircle /> }

				{ text}
			</button>
		</>
	)
}