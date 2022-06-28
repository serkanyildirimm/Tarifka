import React from 'react';
import {StatusBar} from 'react-native';
import Categories from './src/pages/Categories/Categories';
import Meals from './src/pages/Meals/Meals';
import MealDetail from './src/pages/MealDetail/MealDetail';
import Starter from './src/pages/Starter/Starter';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='orange' />
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="StarterPage" component={Starter} />
        <Stack.Screen name="CategoriesPage" component={Categories} />
        <Stack.Screen name="MealsPage" component={Meals} />
        <Stack.Screen name="MealDetailPage" component={MealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
