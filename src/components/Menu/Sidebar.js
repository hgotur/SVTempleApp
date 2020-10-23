import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import Images from '../../styles/images';
import Colors from '../../styles/colors';

const Sidebar = (props) => {
    const onPressHeader = () => {
        props.navigation.navigate('Home');
    };
    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity
                onPress={onPressHeader}
                style={styles.imageContainer}>
                <Image
                    source={Images.logo}
                    resizeMode="contain"
                    style={styles.image}
                />
            </TouchableOpacity>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 160,
    },
    imageContainer: {
        margin: 10,
        backgroundColor: Colors.Orange1,
        borderRadius: 10,
    },
});

export default Sidebar;
