import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ArticleInfo = (props) => {
    const { title, excerpt, date } = props;

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{date}</Text>
            <View style={{flex: 1, backgroundColor: "blue", height: 100}} >
                <WebView originWhitelist={['*']} source={{ html: excerpt }} style={{fontSize: 30}}/>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 5,
        backgroundColor: "#eee",
        flex: 1,
    },
    html: {
        fontSize: 12,
    }
});

export default ArticleInfo;
