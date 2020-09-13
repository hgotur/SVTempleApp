import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { getPagesMetadata } from '../redux/PageSlice';
import globalStyles from '../styles/globalStyle';

const HomePage = (props) => {
    useEffect(() => {
        props.getPagesMetadata();
    });

    return (
        <View style={globalStyles.body}>
            <Text>Home Screen</Text>
        </View>
    );
};

const mapDispatchToProps = {
    getPagesMetadata,
};

export default connect(null, mapDispatchToProps)(HomePage);
