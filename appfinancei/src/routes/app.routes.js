import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'


const AppStack = createStackNavigator();

function AppRoutes() {
	
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;