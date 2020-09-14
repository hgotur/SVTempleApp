import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Article = (props) => {
    const { content } = props;
    return (
        <View style={styles.html}>
            <WebView originWhitelist={['*']} source={{ html: content }} />
        </View>
    );
};

const styles = StyleSheet.create({
    html: {
        flex: 1,
    },
});

export default Article;
