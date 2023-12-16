import React from 'react';
import { AuthProvider } from './src/services/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/index';
import { Provider } from 'react-redux';
import { appstore } from './src/redux/store'

export default function App() {
    return (
      <Provider store={appstore}>
        <AuthProvider> 
          <NavigationContainer>
            <StackNavigator/>
          </NavigationContainer>
        </AuthProvider>
      </Provider>
    );
  }


