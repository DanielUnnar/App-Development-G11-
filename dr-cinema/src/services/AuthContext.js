import React, { createContext, useState, useEffect, useContext } from 'react';
import { decode as atob, encode as btoa } from 'base-64';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [token, setToken] = useState('');

useEffect(() => {
    const fetchData = async () => {
    try {
        // Fetching logic here...
    } catch (error) {
        console.error('Error:', error);
    }
    };

    fetchData();
}, []);

const updateToken = (newToken) => {
    setToken(newToken);
};

return (
    <AuthContext.Provider value={{ token, updateToken }}>
    {children}
    </AuthContext.Provider>
);
};

export function useAuth() {
    const [credentials, setCredentialsState] = useState({
      username: '',
      password: '',
    });
    const [token, setToken] = useState('');
  
    async function getToken() {
      try {
        const response = await fetch('https://api.kvikmyndir.is/authenticate', {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password),
            }),
            });
    
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setToken(data.token)
        return data.token;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    async function setCredentials(user, pass) {
      try {
        setCredentialsState({username: user, password: pass})
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    return {
      credentials,
      setCredentials: setCredentialsState, // Rename the setCredentials function
      token,
      getToken,
    };
  }
  