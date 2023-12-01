import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Boards from '../components/boards/BoardItem';
import BoardCreate from '../components/boards/boardedit/boardcreate/BoardCreate';
import Lists from '../components/lists/ListItem';
const Stack = createStackNavigator();

const mytheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#1111',
    card: '#3cbc',
    text: '#fff',
    border: 'rgb(199, 199, 204)',
  },
};

const Routes = () => (
  <NavigationContainer theme={mytheme}>
    <Stack.Navigator>
      <Stack.Screen name='Boards' component={Boards}/>
      <Stack.Screen name='Create Board' component={BoardCreate}/>
      <Stack.Screen name='Lists' component={Lists}/>
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
