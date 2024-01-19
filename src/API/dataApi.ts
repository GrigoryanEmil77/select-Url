import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    fetchSelectedResource: builder.query({
      query: (res: string) => `${res}`,
    }),
  }),
});

export const { useFetchSelectedResourceQuery } = todosApi;
