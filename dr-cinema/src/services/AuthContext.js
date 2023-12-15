import React, { createContext, useState, useEffect, useContext } from 'react';
import { decode as atob, encode as btoa } from 'base-64';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../redux/reducers/tokenReducer';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const token = useSelector((state) => state.token);

    const fetchData = async (username, password) => {
    try {
        if (!username || !password) {
        return;
        }

        const response = await fetch('https://api.kvikmyndir.is/authenticate', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Basic ' + btoa(username + ':' + password),
        }),
        });

        if (!response.ok) {
        throw new Error('Network response was not ok');
        }

        const data = await response.json();
        dispatch(setToken(data.token));
    } catch (error) {
        console.error('Error:', error);
    }
    };

    useEffect(() => {
        fetchData(credentials.username, credentials.password);
      }, [dispatch, credentials.username, credentials.password]);
      

    return (
    <AuthContext.Provider value={{ token, setCredentials }}>
        {children}
    </AuthContext.Provider>
    );
};

export function useAuth() {
    const dispatch = useDispatch();
    const { credentials, setCredentials } = useContext(AuthContext);
    const token = useSelector((state) => state.token);

    const fetchData = async (username, password) => {
    try {
        if (!username || !password) {
        // Handle empty credentials if needed
        return;
        }

        const response = await fetch('https://api.kvikmyndir.is/authenticate', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Basic ' + btoa(username + ':' + password),
        }),
        });

        if (!response.ok) {
        throw new Error('Network response was not ok');
        }

        const data = await response.json();
        dispatch(setToken(data.token));
        console.log(data.token)
        return data.token;
    } catch (error) {
        console.error('Error:', error);
    }
    };

    const handleLogin = async (username, password) => {
    try {
        setCredentials({ username: username, password: password });
        await fetchData(username, password);
    } catch (error) {
        console.error('Error:', error);
    }
    };

    return {
    credentials,
    handleLogin,
    token,
    getToken: () => fetchData(credentials.username, credentials.password),
    };
}