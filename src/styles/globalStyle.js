import { StyleSheet, Dimensions } from 'react-native';

import Colors from './colors';

export const getMaxContainerWidth = () => {
    return Dimensions.get('window').width > 700 ? '70%' : '95%';
};

const globalStyles = StyleSheet.create({
    body: {
        flex: 1,
    },
    boldText: {
        fontSize: 16,
        color: Colors.Black,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.Black,
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.Black,
    },
    text: {
        fontSize: 16,
        flexWrap: 'wrap',
        color: Colors.Black,
    },
    textContainer: {
        padding: 10,
        height: '100%',
        alignSelf: 'center',
        width: getMaxContainerWidth(),
    },
    textGroup: {
        marginBottom: 15,
    },
});

export default globalStyles;
