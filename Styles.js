const { StyleSheet } = require("react-native");

const styles=StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'black'
      },
      container: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
      },
      item: {
        padding: 10,
        fontSize: 20,
        height: 44,
        textAlign:'right'
      },
      item1:{
        padding:10,
        fontSize:20,
        height:44,
        textAlign:'left'
      },
    input:{
        fontSize:18,
        borderWidth:3,
        borderColor:"tomato",
        borderRadius:50,
        width:240,
        padding:10,
        marginBottom:30,
        backgroundColor:'tomato',
        color:'white'


    },
    input1:{
        fontSize:18,
        borderWidth:3,
        borderColor:"tomato",
        borderRadius:50,
        width:'80%',
        padding:10,
        marginBottom:30,
        backgroundColor:'tomato',
        color:'white'
    },
    button:{
        marginTop:20,
        borderWidth:2,
        borderColor:'tomato',
        backgroundColor:'tomato',
        width:240,
        alignItems:'center',
        padding:10,
        borderRadius:50

    },
    heading:{
        fontSize:40,

    }
})
export default styles