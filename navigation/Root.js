import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import Register from '../screens/Register';
import Login from '../screens/Login';
import LoadingScreen from '../screens/LoadingScreen';
import LibraryScreen from '../screens/LibraryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={globalScreenOptions}
            >
                <Stack.Screen name='Loading' component={LoadingScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Library' component={LibraryScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const globalScreenOptions = {
    headerStyle: { backgroundColor: "darkslategrey" },
    headerTitleStyle: { color: "white", fontWeight: 'bold', fontSize: 30 },
    headerTitleAlign: "center",
    headerTintColor: "white",
}