import React, {useEffect, useRef} from "react";
import InputText from "@/components/form/InputText";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import {useCreateNewProjectMutation} from "@/services/Projects/Store/ProjectApiSlice";
import {AlertError} from "@/components/Alert";

interface FormProjectCreateProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormProjectCreate({ setOpen }: FormProjectCreateProps) {
	const [projectName, setProjectName] = React.useState<string>('');
	const [projectStatus, setProjectStatus] = React.useState<string>('In progress');

	const [
		createNewProject,
		{
			data: createdProjectData,
			isSuccess: newProjectIsSuccess,
			isLoading: newProjectIsCreating,
			isError: newProjectCreateHasError,
			error: newProjectCreateError
		}
	] = useCreateNewProjectMutation()


	useEffect(() => {
		if(newProjectIsSuccess){
			setOpen(false)
		}
	}, [newProjectIsSuccess, setOpen])


	async function onSubmit(e: any) {
		e.preventDefault()

		try {

			const newProjectData = {
				projectName,
				projectStatus
			}

			await createNewProject(newProjectData)

		}catch (err: any) {
			alert('Error')
		}

	}

	function cancelFormRequest(e: any) {
		e.preventDefault()
		setOpen(false)
	}

	return (
		<form onSubmit={onSubmit} className={`flex flex-col gap-y-4 text-left my-4`}>
			<div className="mt-2">

				{/* Input: Email */}
				<InputText
					value={projectName}
					setValue={setProjectName}
					label={'Project Name'}
					id={`title`}
					name={`title`}
				/>

			</div>

			{
				newProjectCreateHasError && (
					<AlertError
						hasError={newProjectCreateHasError}
						error={newProjectCreateError} />
				)
			}

			<div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
				<FormSubmitButton
					text={`Create Project`}
					loading={newProjectIsCreating}
					className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
				/>

				<button
					type="button"
					className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
					onClick={cancelFormRequest}
				>
					Cancel
				</button>
			</div>
		</form>
	);
}