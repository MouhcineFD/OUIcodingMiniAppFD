import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListMovies from '../screens/ListMovies';
import MovieDetails from '../screens/MovieDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListMovies">
        <Stack.Screen
          name="ListMovies"
          component={ListMovies}
          options={{title: 'Trending Movies'}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
