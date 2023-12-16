import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const apiService = createApi({
    reducerPath: "kvikmyndirApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.kvikmyndir.is/', 
    prepareHeaders: (headers) => {
        
    }}),
    
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => "movies"
        }),
        getCinemas: builder.query({
            query: () => "theaters"
        }),
        getUpcoming: builder.query({
            query: () => "upcoming",
            
        })

    })

})

export async function getMovies(token) {

  try {
    const response = await fetch('https://api.kvikmyndir.is/movies', {
      method: 'GET',
      headers: new Headers({
        'x-access-token': token,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getCinemas(token) {

  try {
    const response = await fetch('https://api.kvikmyndir.is/theaters', {
      method: 'GET',
      headers: new Headers({
        'x-access-token': token,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getUpcoming(token) {

  try {
    const response = await fetch('https://api.kvikmyndir.is/upcoming', {
      method: 'GET',
      headers: new Headers({
        'x-access-token': token,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
