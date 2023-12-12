import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../views/home/home';
import { MoviesScreen } from '../views/upcoming/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Upcoming Movies" component={MoviesScreen} />
    </Tab.Navigator>
  );
}

export function StackNavigator() {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Default" component={TabNavigator} options={{headerShown: false,}}/>
        {/* <Stack.Screen name="Cinema Details" component={MovieDetailsScreen} /> */}
        </Stack.Navigator>
    );
}
