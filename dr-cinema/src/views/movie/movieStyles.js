import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    duration: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10,
    },
    date: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10,
    },
    genres: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10,
    },
    image: {
        height: 300,
        width: 180,
    },
    header: {
        alignItems: 'center',
    },
    body: {
        alignItems: 'center'
    },
    scheduleview: {
        backgroundColor: 'white',
        borderColor: 'black',
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    schedule: {
        padding: 20,
    },
    purchase: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f38902',
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
    },
    purchasebutton: {

    }
});

export default styles;