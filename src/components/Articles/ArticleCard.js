import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Moment from 'react-moment';

import Colors from '../../styles/colors';

const ArticleCard = (props) => {
    const { title, excerpt, date, goToArticle } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={goToArticle}>
            <Text style={styles.title}>{title}</Text>
            <Moment>{date}</Moment>
            <View style={styles.html}>
                <WebView originWhitelist={['*']} source={{ html: excerpt }} />
            </View>
        </TouchableOpacity>
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

export default ArticleCard;
