// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const destinationApi = createApi({
  reducerPath: "destinationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/destinations" }),
  endpoints: (builder) => ({
    getDestinations: builder.query({
      query: () => ``,
    }),
    createDestination: builder.mutation({
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
    updateDestination: builder.mutation({
      query: (userObj) => {
        return {
          url: `/${userObj.id}`,
          method: "PUT",
          body: { name: userObj.name, description: userObj.description },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: localStorage.getItem("token"),
          },
        };
      },
    }),
    deleteDestination: builder.mutation({
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
  useGetDestinationsQuery,
  useCreateDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationApi;
