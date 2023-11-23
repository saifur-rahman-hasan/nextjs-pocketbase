import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ProjectApiSlice: any = createApi({
  reducerPath: "ProjectApiSlice",
  refetchOnFocus: true,
  refetchOnReconnect: true,

  tagTypes: ["Projects"],

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),

  endpoints: (builder) => ({
    getProjects: builder.query({
      query(params: any) {
        const queryParams = new URLSearchParams(params)
        return {
          url: `/projects?${queryParams}`,
          method: "GET",
        };
      },

      providesTags: ["Projects"],

      transformResponse(baseQueryReturnValue) {
        // @ts-ignore
        return baseQueryReturnValue.data
      }
    }),

    getProjectById: builder.query({
      query: (params) => {
        const {projectId} = params

        return {
          url: `/projects/${projectId}`
        }
      },
    }),

    createNewProject: builder.mutation({
      query(params) {
        return {
          url: `/projects`,
          method: "POST",
          body: params,
        };
      },

      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return baseQueryReturnValue.data;
      },

      invalidatesTags: ["Projects"],
    }),

    updateProject: builder.mutation({
      query(params) {
        const { projectId } = params;

        return {
          url: `/projects/${projectId}`,
          method: "PUT",
          body: params,
        };
      },

      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return baseQueryReturnValue.data;
      },

      invalidatesTags: ["Projects"],
    }),

    deleteProject: builder.mutation({
      query(params) {
        const { projectId } = params;

        return {
          url: `/projects/${projectId}`,
          method: "DELETE",
        };
      },

      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return baseQueryReturnValue.data;
      },

      invalidatesTags: ["Projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateNewProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = ProjectApiSlice;
