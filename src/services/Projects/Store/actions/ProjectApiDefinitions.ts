export const newUserCreateApiDefinition = {
	query(params: any) {
		return {
			url: `/users`,
			method: 'POST',
			body: params,
		}
	},

	transformResponse(baseQueryReturnValue: any) {
		return baseQueryReturnValue.data
	},

	invalidatesTags: ['Users'],
}



export const ProjectListApiDefinition = {
	query(params: any) {
		const queryParams = new URLSearchParams(params)
		return {
			url: `/users?${queryParams}`,
			method: "GET",
		};
	},

	providesTags: ["Projects"],
}