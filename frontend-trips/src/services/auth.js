// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userObj) => {
        return {
          url: `signin`,
          method: "POST",
          body: userObj,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    createUser: builder.mutation({
      query: (userObj) => {
        return {
          url: `signup`,
          method: "POST",
          body: userObj,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserMutation, useCreateUserMutation } = authApi;
