import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Boards from '../components/boards/BoardItem';
import BoardCreate from '../components/boards/boardedit/boardcreate/BoardCreate';
import BoardModify from '../components/boards/boardedit/boardmodify/BoardModify';
import Lists from '../components/lists/ListItem';
import ListCreate from '../components/lists/listedit/listcreate/ListCreate';
import ListModify from '../components/lists/listedit/listmodify/ListModify';
const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Boards' component={Boards}/>
      <Stack.Screen name='Create Board' component={BoardCreate}/>
      <Stack.Screen name='Lists' component={Lists}/>
      <Stack.Screen name='Modify Board' component={BoardModify}/>
      <Stack.Screen name='Create List' component={ListCreate}/>
      <Stack.Screen name='Modify List' component={ListModify}/>
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
