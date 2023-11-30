import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Boards from '../components/boards/BoardItem';
import BoardCreate from '../components/boards/boardedit/boardcreate/BoardCreate';
const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Boards' component={Boards}/>
      <Stack.Screen name='Create Board' component={BoardCreate}/>
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes