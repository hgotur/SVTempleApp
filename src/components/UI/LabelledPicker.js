import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';

import Colors from '~/src/styles/colors';

const LabelledPicker = (props) => {
    const { label, style, children, ...rest } = props;
    return (
        <View style={style}>
            <Text style={styles.boldText}>{label}</Text>
            <Picker {...rest} style={[styles.input, style]}>
                {children}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.Black,
        borderWidth: 1,
        fontSize: 16,
        color: Colors.Black,
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.Black,
    },
});

export default LabelledPicker;
