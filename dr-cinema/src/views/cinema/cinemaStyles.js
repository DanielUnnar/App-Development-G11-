import { StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    text1: {
        color: 'white',
        fontSize: 13,
        paddingLeft: 20,
        paddingRight: 20,
    },
    h1: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25,
    },
    h3: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 10,
        marginLeft: 20,
        marginBottom: 10,
    },
    body: {
        flex: 1,
    },
    website: {
        textAlign: 'center',
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#44a6c6',
        paddingTop: 16,
    },
    flatListContainer: {
        paddingVertical: 10,
        height: 550,
        
    },
    movieContainer: {
        flex: 1,
        backgroundColor: '#44a6c6',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 16,
        width: windowWidth / 1 - 100,
        overflow: 'hidden', 
    },    
    posterImage: {
        height: '80%', 
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8,

    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        maxWidth: '100%',
        
    },    
    releaseDate: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
    button: {
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;