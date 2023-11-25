"use client"

import React from 'react'
import ButtonCreateNewProject from "@/services/Projects/Views/Components/ButtonCreateNewProject";
import {useGetProjectsQuery} from "@/services/Projects/Store/ProjectApiSlice";
import {CardHeading} from "@/components/card/CardHeading";
import LoadingCircle from "@/components/loaders/LoadingCircle";
import {ProjectStackLists} from "@/services/Projects/Views/Components/ProjectComponents";


export default function ProjectListPage() {
	const {
		isLoading: projectDataIsLoading,
		isSuccess: projectDataIsSuccess,
		data: projectData,
	} = useGetProjectsQuery()

	return (
		<>
			<CardHeading
				title={'My Projects'}
				description={'Here is the list of your Projects'}
				actions={<ButtonCreateNewProject />}
			/>

			{ projectDataIsLoading && <LoadingCircle /> }

			{
				!projectDataIsLoading &&
				projectDataIsSuccess &&
				!projectData?.length &&
				(<div>You have no data</div>)
			}

			{
				!projectDataIsLoading &&
				projectDataIsSuccess &&
				projectData?.length > 0 &&
				(<ProjectStackLists projects={projectData} />)
			}

		</>
	)
}