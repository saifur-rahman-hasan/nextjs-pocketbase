import {AlertError} from "@/components/Alert";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import InputEmail from "@/components/form/InputEmail";
import {
	DividerWithText,
	ForgetPasswordLink,
	ProviderLoginLinks
} from "@/services/Pocketbase/Views/Components/FormComponents";
import InputRememberMe from "@/components/form/InputRememberMe";
import InputPassword from "@/components/form/InputPassword";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;




export default function PocketbaseLoginForm(){
	const route = useRouter();
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const [rememberMe, setRememberMe] = React.useState<boolean>(true);
	const [error, setError] = React.useState('');
	const [loading, setLoading] = React.useState<boolean>(false)

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true)

		try {

			const loginFormData = {
				email,
				password
			};

			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(loginFormData)
			});

			if (!response.ok) {
				const errorResponse = await response.json()
				console.log('response', errorResponse)
				setError(errorResponse.message);
				setLoading(false)

				return;
			}

			const data = await response.json();

			if (data?.data?.token) {
				route.push('/dashboard');
			} else {
				setError('Failed to authenticate user');
			}

			setLoading(false)

		} catch (err) {
			setError('Failed to authenticate user');
			setLoading(false)
		}
	};

	return (
		<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
			<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
				<form
					className="space-y-6"
					onSubmit={onSubmit}
				>

					{/* Input: Email */}
					<InputEmail
						value={email}
						setValue={setEmail}
					/>


					{/* Input: Password */}
					<InputPassword
						value={password}
						setValue={setPassword}
					/>


					<div className="flex items-center justify-between">
						<InputRememberMe
							rememberMe={rememberMe}
							setRememberMe={setRememberMe}
						/>

						<ForgetPasswordLink />
					</div>

					<div>
						<FormSubmitButton
							text={`Login`}
							loading={loading}
						/>
					</div>
				</form>

				{error && (
					<div className={'my-4'}>
						<AlertError
							hasError={!!error?.length}
							error={error}
						/>
					</div>
				)}

				<div>
					<DividerWithText />

					<ProviderLoginLinks />
				</div>
			</div>

			<p className="mt-10 text-center text-sm text-gray-500">
				Not a member?{' '}
				<Link
					href={`/auth/signup`} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
					Sign up
				</Link>
			</p>
		</div>
	)
}