import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Images from '../../styles/images';

const DEFAULT_COLLAPSED = true;

const CollapsibleGroup = (props) => {
    const { children, header, headerStyle, collapsed } = props;

    const initial = collapsed != null ? collapsed : DEFAULT_COLLAPSED;

    const [isCollapsed, setIsCollapsed] = useState(initial);
    const onPress = () => setIsCollapsed(!isCollapsed);

    const source = isCollapsed ? Images.rightArrow : Images.downArrow;

    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <Text style={headerStyle}>
                    <Image
                        source={source}
                        style={styles.arrow}
                        resizeMode="contain"
                    />
                    {header}
                </Text>
            </TouchableOpacity>
            {!isCollapsed && <View>{children}</View>}
        </>
    );
};

const styles = StyleSheet.create({
    arrow: {
        width: 30,
        height: 30,
    },
});

export default CollapsibleGroup;
