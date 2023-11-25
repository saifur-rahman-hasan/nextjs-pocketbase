import React, {Fragment} from "react";
import Link from "next/link";
import {Menu, Transition} from "@headlessui/react";
import {EllipsisVerticalIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";


export function ProjectViewLink({project}: {project: any}) {
	return (
		<Link
			href={project?.href || '/'}
			className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
		>
			View project<span className="sr-only">, {project.name}</span>
		</Link>
	);
}


interface ProjectDropDownActionProps {
	project: any
}

export function ProjectDropDownAction({ project }: ProjectDropDownActionProps) {
	return (
		<Menu as="div" className="relative flex-none">
			<Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
				<span className="sr-only">Open options</span>
				<EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
					<Menu.Item>
						{({ active }) => (
							<Link
								href="/"
								className={clsx(
									active ? 'bg-gray-50' : '',
									'block px-3 py-1 text-sm leading-6 text-gray-900'
								)}
							>
								Edit<span className="sr-only">, {project.name}</span>
							</Link>
						)}
					</Menu.Item>

					<Menu.Item>
						{({ active }) => (
							<Link
								href="/"
								className={clsx(
									active ? 'bg-gray-50' : '',
									'block px-3 py-1 text-sm leading-6 text-gray-900'
								)}
							>
								Move<span className="sr-only">, {project.name}</span>
							</Link>
						)}
					</Menu.Item>

					<Menu.Item>
						{({ active }) => (
							<Link
								href="/"
								className={clsx(
									active ? 'bg-gray-50' : '',
									'block px-3 py-1 text-sm leading-6 text-gray-900'
								)}
							>
								Delete<span className="sr-only">, {project.name}</span>
							</Link>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}




const statuses = {
	Complete: 'text-green-700 bg-green-50 ring-green-600/20',
	'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
	Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}

export function ProjectStackLists({ projects }: {projects: any[]}) {
	return (
		<ul role="list" className="divide-y divide-gray-100">
			{projects.map((project: any) => (
				<ProjectStackListItem
					key={project.id}
					project={project}
				/>
			))}
		</ul>
	);
}

export function ProjectStackListItem ({ project }: {project: any}) {
	return (
		<li className="flex items-center justify-between gap-x-6 py-5">
			<div className="min-w-0">
				<div className="flex items-start gap-x-3">

					<h3 className="text-sm font-semibold leading-6 text-gray-900">{project.name}</h3>

					<p
						className={clsx(
							// @ts-ignore
							statuses[project.status],
							'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
						)}
					>
						{project.status}
					</p>
				</div>

				<div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
					<p className="whitespace-nowrap">
						Due on <time dateTime={project.dueDateTime}>{project.dueDate}</time>
					</p>

					<svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
						<circle cx={1} cy={1} r={1} />
					</svg>

					<p className="truncate">Created by {project.createdBy}</p>
				</div>
			</div>
			<div className="flex flex-none items-center gap-x-4">
				<ProjectViewLink project={project} />

				<ProjectDropDownAction project={project} />
			</div>
		</li>
	)
}