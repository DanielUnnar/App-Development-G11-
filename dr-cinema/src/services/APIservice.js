import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';

export const apiService = createApi({
  reducerPath: 'kvikmyndirApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kvikmyndir.is',
    prepareHeaders: (headers) => {
      const token = useSelector((state) => state.token);
      if (token) {
        headers.set('x-access-token', token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: 'movies',
        method: 'get',
      })
    }),
    getCinemas: builder.query({
      query: () => ({
        url: 'theaters',
        method: 'get',
      })
    }),
    getUpcoming: builder.query({
      query: () => ({
        url: 'upcoming',
        method: 'get',
      })
    }),
  }),
});

export const { endpoints } = apiService;

export const { useGetMoviesQuery, useGetCinemasQuery, useGetUpcomingQuery } = apiService;
