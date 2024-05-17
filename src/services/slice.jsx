import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const tourismApi = createApi({
  reducerPath: "tourismApi",
  baseQuery: fetchBaseQuery({ baseUrl: "localhost:8000/api/" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (name) => {},
    }),
  }),
});

export const {} = tourismApi;
