import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../views/home/home';
import { MoviesScreen } from '../views/upcoming/upcoming';
import { CinemaDetails } from '../views/cinema/cinema';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Upcoming Movies') {
            iconName = 'film-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Upcoming Movies" component={MoviesScreen} />
    </Tab.Navigator>
  );
}

export function StackNavigator() {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Default" component={TabNavigator} options={{headerShown: false,}}/>
        <Stack.Screen name="Cinema Details" component={CinemaDetails} />
        {/* <Stack.Screen name="Cinema Details" component={MovieDetailsScreen} /> */}
        </Stack.Navigator>
    );
}
