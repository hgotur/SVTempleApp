import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import Images from '../styles/images';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Sidebar = (props) => {
    const onPressHeader = () => {
        props.navigation.navigate('Home');
    };
    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity onPress={onPressHeader}>
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
        height: 120
    }
});

export default Sidebar;
