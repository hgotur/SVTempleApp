import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Moment from 'react-moment';

import Colors from '../styles/colors';

const ArticleInfo = (props) => {
    const { title, excerpt, date } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Moment>{date}</Moment>
            <View style={styles.html}>
                <WebView originWhitelist={['*']} source={{ html: excerpt }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 5,
        flex: 1,
    },
    title: {
        fontSize: 24,
        color: Colors.Blue1,
    },
    html: {
        flex: 1,
        height: 100,
    },
});

export default ArticleInfo;
