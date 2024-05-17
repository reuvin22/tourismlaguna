import { configureStore } from "@reduxjs/toolkit";
import { tourismApi } from "./slice";

export const store = configureStore({
  reducer: {
    [tourismApi.reducerPath]: tourismApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tourismApi.middleware),
});
