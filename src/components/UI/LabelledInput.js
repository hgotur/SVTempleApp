import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import Colors from '~/src/styles/colors';

const LabelledInput = (props) => {
    const { label, style } = props;
    return (
        <View style={style}>
            <Text style={styles.boldText}>{label}</Text>
            <TextInput
                {...props}
                placeholderTextColor="#555"
                style={styles.input}
            />
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

export default LabelledInput;
