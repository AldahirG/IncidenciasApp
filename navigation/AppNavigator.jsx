// navigation/AppNavigator.jsx
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

// Importar las pantallas
import WelcomeScreen from '../screens/Common/WelcomeScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import HomeScreen from '../screens/User/HomeScreen';
import AdminHomeScreen from '../screens/Admin/AdminHomeScreen';
import HomePfScreen from '../screens/PF/HomePfScreen';
import IncidentHistoryScreen from '../screens/Admin/IncidentHistoryScreen';
import NewIncidentScreen from '../screens/Admin/NewIncidentScreen';
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { userType, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={userType === 'admin' ? 'AdminHome' : userType === 'pf' ? 'HomePF' : 'Home'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home' || route.name === 'AdminHome' || route.name === 'HomePF') {
              iconName = 'home';
            } else if (route.name === 'IncidentHistory') {
              iconName = 'history';
            } else if (route.name === 'NewIncident') {
              iconName = 'plus-circle';
            } else if (route.name === 'Signup' || route.name === 'Login') {
              iconName = 'sign-in';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        {userType === 'admin' && (
          <>
            <Tab.Screen name="AdminHome" component={AdminHomeScreen} />
            <Tab.Screen name="IncidentHistory" component={IncidentHistoryScreen} />
            <Tab.Screen name="NewIncident" component={NewIncidentScreen} />
          </>
        )}
        {userType === 'user' && (
          <Tab.Screen name="Home" component={HomeScreen} />
        )}
        {userType === 'pf' && (
          <Tab.Screen name="HomePF" component={HomePfScreen} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
