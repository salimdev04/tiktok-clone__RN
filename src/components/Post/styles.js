import { Dimensions, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get("window").height,
        backgroundColor:"#333"
    },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left:0
    },
    UIcontainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems:'flex-end'
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    rowSong: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },

    // Right Container
    rightContainer:{
        alignSelf: "flex-end",
        height: 300,
        justifyContent: 'space-between',
        marginRight: 5
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#fff"
    },
    iconContainer: {
        alignItems:'center'
    },

    statsLabel: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5
    }
})


export default styles