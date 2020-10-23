import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';
import { openBrowserAsync } from 'expo-web-browser';

import globalStyles from '../styles/globalStyle';

const SettingsPage = () => {
    return (
        <View style={globalStyles.body}>
            <View style={globalStyles.textContainer}>
                <Text style={[styles.item, { borderTopWidth: 1 }]}>
                    App Version: {Constants.nativeAppVersion}
                </Text>
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() =>
                        openBrowserAsync(
                            'https://www.termsfeed.com/live/bd54902f-cbcf-4d6c-9e50-9e35a3e9abf1',
                        )
                    }>
                    <Text>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
        textAlignVertical: 'center',
    },
    itemContainer: {
        justifyContent: 'center',
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
    },
});

export default SettingsPage;
