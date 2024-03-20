import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { destinationApi } from "./services/destination";
import { authApi } from "./services/auth";
import { activityApi } from "./services/activity";
import { tripApi } from "./services/trip";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [destinationApi.reducerPath]: destinationApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [tripApi.reducerPath]: tripApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      destinationApi.middleware,
      authApi.middleware,
      activityApi.middleware,
      tripApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
