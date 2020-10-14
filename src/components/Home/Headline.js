import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const Headline = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { headline, imgSrc } = props;

    return (
        <TouchableOpacity
            style={styles.item}
            onLongPress={() => setCollapsed(!collapsed)}>
            <Text style={styles.headline}>{headline}</Text>
            {imgSrc && !collapsed && (
                <Image
                    source={{ uri: imgSrc }}
                    resizeMode="contain"
                    style={styles.image}
                />
            )}
        </TouchableOpacity>
    );
};

export default Headline;

const styles = StyleSheet.create({
    item: {
        width: '95%',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
    },
    headline: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        margin: 5,
    },
    image: {
        width: 360,
        height: 460,
    },
});
