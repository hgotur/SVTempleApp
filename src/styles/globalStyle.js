import { StyleSheet } from 'react-native';

import Colors from '~/src/styles/colors';

const globalStyles = StyleSheet.create({
    body: {
        flex: 1,
    },
    boldText: {
        fontSize: 16,
        color: Colors.Black,
        fontWeight: 'bold',
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
        color: Colors.Black,
    },
    textContainer: {
        padding: 20,
        height: '100%',
        width: '95%',
    },
    textGroup: {
        marginBottom: 15,
    },
});

export default globalStyles;
