import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    body: {
        flex: 1,
    },
    boldText: {
        fontSize: 16,
        color: '#000',
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
        color: '#000',
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    text: {
        fontSize: 16,
        color: '#000',
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
