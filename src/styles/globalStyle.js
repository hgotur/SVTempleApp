import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    body: {
        flex: 1,
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
        marginVertical: 10,
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
    },
    textGroup: {
        marginBottom: 15,
    },
});

export default globalStyles;
