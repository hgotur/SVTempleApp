import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';

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
        borderColor: '#000',
        borderWidth: 1,
        fontSize: 16,
        color: '#000',
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default LabelledPicker;
