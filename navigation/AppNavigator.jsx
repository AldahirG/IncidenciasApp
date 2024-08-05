// navigation/AppNavigator.jsx
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

// Importar las pantallas
import WelcomeScreen from '../screens/Common/WelcomeScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import HomeScreen from '../screens/User/HomeScreen';
import NewIncidentUScreen from '../screens/User/NewIncidentScreen';
import IncidentHistoryUScreen from '../screens/User/IncidentHistoryScreen';
import AdminHomeScreen from '../screens/Admin/AdminHomeScreen';
import HomePfScreen from '../screens/PF/HomePfScreen';
import IncidentHistoryScreen from '../screens/Admin/IncidentHistoryScreen';
import NewIncidentScreen from '../screens/Admin/NewIncidentScreen';
import IncidentProcessScreen from '../screens/PF/IncidentProcessScreen';
import IncidentPFHistoryScreen from '../screens/PF/IncidentHistoryScreen';
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { userType, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="Signup" component={SignupScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
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
            } else if (route.name === 'IncidentProcess') {
              iconName = 'wrench';
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
          <>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="NewIncident" component={NewIncidentUScreen} />
          <Tab.Screen name="IncidentHistory" component={IncidentHistoryUScreen} />
          </>
        )}
        {userType === 'pf' && (
          <>
            <Tab.Screen name="HomePF" component={HomePfScreen} />
            <Tab.Screen name="IncidentProcess" component={IncidentProcessScreen} />
            <Tab.Screen name="IncidentPFHistory" component={IncidentPFHistoryScreen} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
