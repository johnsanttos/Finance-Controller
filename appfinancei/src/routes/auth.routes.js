import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/SingUp';
import SignIn from '../pages/SignIn'


const Stack = createStackNavigator();

function AuthRoutes() {
	
  return (
    <Stack.Navigator>
       
		  <Stack.Screen name="SignIn" component={SignIn}
      options={{
        headerShown: false
      }}
      />

<Stack.Screen name="SignUp" component={SignUp}
      options={{
        headerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#0000ff',
      },
      headerTintColor: '#0000ff',
      headerBackTitleVisible: false,
      headerTitle: 'Voltar'
    
    }}
      />
      
    </Stack.Navigator>
  );
}

export default AuthRoutes;