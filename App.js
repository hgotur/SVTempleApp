import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { getScreenOptions } from './src/components/Header';
import { HomePage, DetailsPage } from './src/pages';

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={getScreenOptions(navigation)}>
            <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Details" component={DetailsPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
