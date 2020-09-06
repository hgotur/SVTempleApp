import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const MenuIcon = (props) => {
    return (
        <TouchableOpacity
            onPress={props.openDrawer}
            style={styles.menu}
        >
            <Ionicons name="md-menu" size={28} color="white" />
        </TouchableOpacity>
    );
};

const getScreenOptions = (navigation) => {
    return {
        headerStyle: {
            backgroundColor: "#f4511e",
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerLeft: () => (
            <MenuIcon openDrawer={() => navigation.openDrawer()} />
        )
    }
};

const styles = StyleSheet.create({
    menu: {
        padding: 10,
    },
});

export { getScreenOptions };