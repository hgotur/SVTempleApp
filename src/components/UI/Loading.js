import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import globalStyles from '../../styles/globalStyle';

const Loading = () => (
    <View style={globalStyles.body}>
        <ActivityIndicator size="large" />
    </View>
);

export default Loading;
