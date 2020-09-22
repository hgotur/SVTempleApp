import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

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

export default LabelledInput;
