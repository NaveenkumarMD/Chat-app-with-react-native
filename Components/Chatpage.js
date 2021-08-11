import React, { Component, createRef } from 'react'
import {View,Text, Button,SafeAreaView } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../Styles'
import firebase from 'firebase'
import 'firebase/firebase-firestore'
import { Ionicons } from "@expo/vector-icons"


export default class Chatpage extends Component {
    constructor(props){
        super(props)
        this.divref=createRef()
        this.state={
            
            chats1:[],
            message:"",
            user1:'naveenmd',
            user2:'Sethu8474'

        }
        this.db=firebase.firestore()
    }
    ItemView = ({item}) => {
        return (
          // FlatList Item
          <View>
              
             
            <Text
              style={ item.substring(0,item.search("-"))==this.state.user1?styles.item:styles.item1}>
                  
              {item.substring(item.search('-')+1,item.search("/"))}
            </Text>
          </View>
        );
      };
      ItemSeparatorView = () => {
        return (
          // FlatList Item Separator
          <View
              style={{
                  height: 0.5,
                  width: '100%',
                  backgroundColor: '#C8C8C8'
              }}
          />
        );
      };
    send=()=>{
     var arr=this.state.chats
     var message=this.state.message
     this.setState({message:''})
     var val = Math.floor(1000 + Math.random() * 9000)
     var d = new Date();
     var seconds = Math.floor(d.getTime() / 1000)
     var object={
        [this.state.user1+"-"+message+"/"+seconds]:seconds,
        
     }
     this.db.collection('messages').doc(this.state.user1).set({
         
        [this.state.user2]:object,
        
     },{merge:true}).then(data=>{
         console.log("sucess")
     }).catch(err=>{
        console.log(err)
     })
    }
    async componentDidMount(){
        console.log(this.props.route.params.users.username)
        this.setState({user2:this.props.route.params.users.username})
        console.log(this.props.route.params.users.mainuser)
        this.setState({user1:this.props.route.params.users.mainuser})
    this.db.collection('messages').onSnapshot(query=>{
        var arr={}
        query.forEach(doc=>{
            let user1=this.state.user1
            //console.log("after using user1"+doc.data().user1)
            if(doc.data()[user1]!=undefined && doc.id==this.state.user2){
                console.log("checking with id")
                arr1=doc.data()[user1]
                console.log("array 1is"+arr1)
                arr={
                    ...arr,
                    ...arr1
                }
                
               }
            if(doc.data()[this.state.user2]!=undefined && doc.id==this.state.user1){
                arr1=doc.data()[this.state.user2]
                arr={
                    ...arr,
                    ...arr1
                }
                
                }
                
         
        })
        
         var array=Object.keys(arr).sort(function(a,b){
            //console.log(arr[a]) 
            return arr[a]-arr[b]})
        //console.log(array)
        console.log(array)
         this.setState({
            chats1:array
        })
    })
}
    render() {
        const data=this.state.chats1.map(data=>{
           // console.log(data)
            return(
                <Text>{data}</Text>
            )
        })
        return (
            <View style={{flex: 1}}>
                <SafeAreaView style={{flex: 0.9}}>
                    <View style={styles.container}>
                        <FlatList inverted contentContainerStyle={{flexDirection:'column-reverse'}}
                        data={this.state.chats1}
                        //data defined in constructor
                        ItemSeparatorComponent={this.ItemSeparatorView}
                        //Item Separator View
                        renderItem={this.ItemView}
                        keyExtractor={(item, index) => item.toString()}
                        />
                    </View>
                    </SafeAreaView>
                    
            <View style={{flex: 0.1,flexDirection:"row"}}>
               
                <TextInput onChangeText={text=>this.setState({message:text})} placeholder="type something...." style={{fontSize:22,backgroundColor:"white",color:"grey",height:50,borderRadius:30,padding:10,width:"90%"}} value={this.state.message}/>
               <TouchableOpacity onPress={()=>this.send()}>
               <Ionicons name="send" size={40} color="gray" />
               </TouchableOpacity>
                
            </View>
            </View>
         
        )
    }
}
