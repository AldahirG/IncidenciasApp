// navigation/AppNavigator.jsx
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importar las pantallas
import WelcomeScreen from '../screens/Common/WelcomeScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import HomeScreen from '../screens/User/HomeScreen';
import AdminHomeScreen from '../screens/Admin/AdminHomeScreen';
import HomePfScreen from '../screens/PF/HomePfScreen';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { userType } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="HomePF" component={HomePfScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
