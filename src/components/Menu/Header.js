import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../styles/colors';

const MenuIcon = (props) => {
    return (
        <TouchableOpacity onPress={props.openDrawer} style={styles.menu}>
            <Ionicons name="md-menu" size={28} color="#000" />
        </TouchableOpacity>
    );
};

const getScreenOptions = (navigation) => {
    return {
        headerStyle: {
            backgroundColor: Colors.Orange2,
        },
        headerTintColor: Colors.Black,
        headerTitleAlign: 'center',
        headerLeft: () => (
            <MenuIcon openDrawer={() => navigation.openDrawer()} />
        ),
    };
};

const styles = StyleSheet.create({
    menu: {
        padding: 10,
    },
});

export { getScreenOptions };
