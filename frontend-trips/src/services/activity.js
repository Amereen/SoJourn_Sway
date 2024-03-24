// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const activityApi = createApi({
  reducerPath: "activityApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/activities" }),
  endpoints: (builder) => ({
    getActivities: builder.query({
      query: () => ({
        url: `/`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: localStorage.getItem("token"),
        },
      }),
    }),
    createActivity: builder.mutation({
      query: (userObj) => {
        return {
          url: `/`,
          method: "POST",
          body: userObj,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: localStorage.getItem("token"),
          },
        };
      },
    }),
    updateActivity: builder.mutation({
      query: (userObj) => {
        return {
          url: `/${userObj.id}`,
          method: "PUT",
          body: { name: userObj.name, description: userObj.description, destination_id: userObj.destination_id },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: localStorage.getItem("token"),
          },
        };
      },
    }),
    deleteActivity: builder.mutation({
      query: (userObj) => {
        return {
          url: `/${userObj.id}`,
          method: "DELETE",
          body: {},
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: localStorage.getItem("token"),
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetActivitiesQuery,
  useDeleteActivityMutation,
  useCreateActivityMutation,
  useUpdateActivityMutation,
} = activityApi;
