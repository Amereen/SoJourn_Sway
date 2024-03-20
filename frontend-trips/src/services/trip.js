// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const tripApi = createApi({
  reducerPath: "tripApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/trips" }),
  endpoints: (builder) => ({
    getTrips: builder.query({
      query: () => ({
        url: `/`,
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: localStorage.getItem("token"),
        },
      }),
    }),
    createTrip: builder.mutation({
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
    updateTrip: builder.mutation({
      query: (userObj) => {
        return {
          url: `/${userObj.id}`,
          method: "PUT",
          body: { ...userObj },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: localStorage.getItem("token"),
          },
        };
      },
    }),
    deleteTrip: builder.mutation({
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
  useGetTripsQuery,
  useDeleteTripMutation,
  useCreateTripMutation,
  useUpdateTripMutation,
} = tripApi;
