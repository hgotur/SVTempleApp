import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import store from './src/redux/store';
import { getScreenOptions } from './src/components/Menu/Header';
import {
    HomePage,
    AboutPage,
    ContactPage,
    DonationsPage,
    EventsPage,
    ServicesPage,
} from './src/pages';
import Colors from './src/styles/colors';
import Sidebar from './src/components/Menu/Sidebar';

const HomeStack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <HomeStack.Navigator screenOptions={getScreenOptions(navigation)}>
            <HomeStack.Screen name="Home" component={HomePage} />
        </HomeStack.Navigator>
    );
}

const EventsStack = createStackNavigator();

function EventsScreen({ navigation }) {
    return (
        <EventsStack.Navigator screenOptions={getScreenOptions(navigation)}>
            <EventsStack.Screen name="Events" component={EventsPage} />
        </EventsStack.Navigator>
    );
}

const ServicesStack = createStackNavigator();

function ServicesScreen({ navigation }) {
    return (
        <ServicesStack.Navigator screenOptions={getScreenOptions(navigation)}>
            <ServicesStack.Screen name="Services" component={ServicesPage} />
        </ServicesStack.Navigator>
    );
}

const ContactStack = createStackNavigator();

function ContactScreen({ navigation }) {
    return (
        <ContactStack.Navigator screenOptions={getScreenOptions(navigation)}>
            <ContactStack.Screen name="Contact" component={ContactPage} />
        </ContactStack.Navigator>
    );
}

const DonationsStack = createStackNavigator();

function DonationsScreen({ navigation }) {
    return (
        <DonationsStack.Navigator screenOptions={getScreenOptions(navigation)}>
            <DonationsStack.Screen
                name="Donations"
                component={DonationsPage}
                options={{ title: 'Donations & Membership' }}
            />
        </DonationsStack.Navigator>
    );
}

const AboutStack = createStackNavigator();

function AboutScreen({ navigation }) {
    return (
        <AboutStack.Navigator screenOptions={getScreenOptions(navigation)}>
            <AboutStack.Screen name="About" component={AboutPage} />
        </AboutStack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    drawerContent={(props) => <Sidebar {...props} />}
                    drawerContentOptions={{
                        activeBackgroundColor: Colors.Orange1,
                        activeTintColor: '#fff',
                        inactiveTintColor: '#000',
                        backgroundColor: Colors.Orange2,
                    }}>
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Events" component={EventsScreen} />
                    <Drawer.Screen name="Services" component={ServicesScreen} />
                    <Drawer.Screen name="Contact" component={ContactScreen} />
                    <Drawer.Screen name="Donations" component={DonationsScreen} />
                    <Drawer.Screen name="About" component={AboutScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
