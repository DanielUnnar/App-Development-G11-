import { decode as atob, encode as btoa } from 'base-64';

export async function getToken() {
  try {
    const response = await fetch('https://api.kvikmyndir.is/authenticate', {
      method: 'POST',
      headers: new Headers({
        'Authorization': 'Basic ' + btoa('G11:password123'),
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getMovies() {
    try {
        const response = await fetch('https://api.kvikmyndir.is/movies', {
          method: 'Get',
          headers: new Headers({
            'x-access-token': await getToken(),
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
    