
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../assets/colors';

import IndexScreen from '../screens/init';
import Home from '../screens/home';
import Products from '../screens/products';
import DetailProducts from '../screens/products/screens/detailproduct';

const Stack = createStackNavigator();

const header = {
  headerStyle: {
    backgroundColor: colors.header,
  },
  headerTintColor: colors.textwhite,
  headerTitleStyle: {
    fontWeight: 'bold',
  }
};

const Routes = () => {
    return(
        <NavigationContainer>
          <StatusBar backgroundColor={colors.statusbar}/>
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Index" component={IndexScreen} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} options={header} />
            <Stack.Screen name="Products" component={Products} options={header} />
            <Stack.Screen name="DetailProducts" component={DetailProducts} options={header} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Routes;