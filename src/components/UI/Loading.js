import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import globalStyles from '../../styles/globalStyle';

const Loading = () => (
    <View style={globalStyles.center}>
        <ActivityIndicator size="large" />
    </View>
);

export default Loading;
