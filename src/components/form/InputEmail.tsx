import React from "react";

interface InputEmailProps {
	value: string,
	setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function InputEmail({ value, setValue }: InputEmailProps){
	return (
		<div>
			<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
				Email address
			</label>
			<div className="mt-2">
				<input
					id="email"
					name="email"
					type="email"
					autoComplete="email"
					required
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					onChange={e => setValue(e.target.value || '')}
				/>
			</div>
		</div>
	)
}