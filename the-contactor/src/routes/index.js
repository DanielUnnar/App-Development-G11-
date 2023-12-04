import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListView from '../views/contact-list-view/ContactListView';
import ContactDetailsView from '../views/contact-details-view/ContactDetailsView';
import CreateContactView from '../views/contact-create-view/CreateContactView';
import ModifyContactView from '../views/contact-modify-view/ContactModifyView';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Contact List' component={ContactListView}/>
        <Stack.Screen name='Contact Details' component={ContactDetailsView}/>
        <Stack.Screen name='Create Contact' component={CreateContactView}/>
        <Stack.Screen name='Modify Contact' component={ModifyContactView}/>
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
