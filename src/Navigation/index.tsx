
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../Screens/Cart';
import Products from '../Screens/Products';
import Favourite from '../Screens/Favourite';
import Home from '../Screens/Home';
const Stack= createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          />
         <Stack.Screen
          name='Products'
          component={Products}
          options={{ headerShown: false }}
         />
       
           <Stack.Screen
         name='Cart'
         component={Cart}
         options={{ headerShown: false }}
         />
            <Stack.Screen
         name='Favourite'
         component={Favourite}
         options={{ headerShown: false }}
         />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;