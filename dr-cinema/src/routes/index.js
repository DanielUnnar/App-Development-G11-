import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../views/login/login';
import { HomeScreen } from '../views/home/home';
import { MoviesScreen } from '../views/upcoming/upcoming';
import { CinemaDetails } from '../views/cinema/cinema';
import { MovieDetails } from '../views/movie/movie';
import { TrailerScreen } from '../views/upcoming/trailer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';


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
        tabBarStyle: { backgroundColor: '#333333' }, 
        tabBarActiveTintColor: '#44a6c6', 
        tabBarInactiveTintColor: 'gray',
        headerStyle: { backgroundColor: '#333333' },
        headerTintColor: '#44a6c6',
      })}
      
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Upcoming Movies" component={MoviesScreen} />
    </Tab.Navigator>
  );
}

export function StackNavigator() {
    return (
        <Stack.Navigator 
          screenOptions={{headerStyle: { backgroundColor: '#333333' },
          headerTintColor: '#44a6c6',
          }}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Default" component={TabNavigator} options={{headerShown: false,}}/>
          <Stack.Screen name="Cinema Details" component={CinemaDetails} />
          <Stack.Screen name="Movie Details" component={MovieDetails} />
          <Stack.Screen name="Trailer" component={TrailerScreen} />
        </Stack.Navigator>
    );
}
