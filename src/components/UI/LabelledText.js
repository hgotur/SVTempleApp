import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const DEFAULT_WIDTH = 150;

const LabelledText = (props) => {
    const { label, children, labelWidth, textStyle } = props;
    const width = labelWidth ? labelWidth : DEFAULT_WIDTH;
    return (
        <View style={styles.container}>
            <View style={{ width: width }}>
                <Text style={textStyle}>{label}</Text>
            </View>
            <View>
                <Text style={textStyle}>{children}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
});

export default LabelledText;
