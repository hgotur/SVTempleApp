import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

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
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    headline: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.Black,
        textAlign: 'center',
        width: 360,
    },
    image: {
        marginTop: 10,
        width: 360,
        height: 460,
    },
});
