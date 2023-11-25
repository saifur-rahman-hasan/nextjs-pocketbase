import React from "react";

interface InputRememberMeProps {
	rememberMe: boolean,
	setRememberMe: React.Dispatch<React.SetStateAction<boolean>>
}

export default function InputRememberMe({ rememberMe, setRememberMe }: InputRememberMeProps){
	return (
		<div className="flex items-center">
			<input
				id="remember-me"
				name="remember-me"
				type="checkbox"
				className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
			/>
			<label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
				Remember me
			</label>
		</div>
	)
}