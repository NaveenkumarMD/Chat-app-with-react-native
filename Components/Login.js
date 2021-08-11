import {View,Text} from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../Styles'
import {Loginfunction} from '../firebase/config'
import {Ionicons} from '@expo/vector-icons'
import Toast from 'react-native-toast-message';
import firebase from 'firebase'
const Login=({navigation})=>{
    var [mail,setmail]=useState("")
    var [password,setpassword]=useState("")
    const Login=()=>{
        
        firebase.auth().signInWithEmailAndPassword(mail,password).then(async (user)=>{
            firebase.firestore().collection('users').doc(mail).get().then(async doc=>{
                console.log(doc.data().username)
                navigation.navigate("Contacts",{
                    mainuser:doc.data().username
                })
            })
            
            
            Toast.show({
                text1:"Login success",
             
            })
           
        //For error handling    
        }).catch(err=>{
            Toast.show({
                type:'error',
                text1:err.message
            })
            
        })
    }
    return(
        <View style={styles.container1}>
            <Toast ref={(ref) => Toast.setRef(ref)} />
            <Ionicons name="logo-snapchat" size={60} color="tomato" style={{marginBottom:60}}/>
            <TextInput placeholder="Email" style={styles.input} placeholderTextColor="white" onChangeText={text=>setmail(text)}/>
            <TextInput placeholder="Password" placeholderTextColor="white" style={styles.input} onChangeText={text=>setpassword(text)}/>
            <TouchableOpacity style={styles.button} onPress={()=>{
                Login()
            }}><Text style={{fontSize:18,color:'white'}}>Log in</Text></TouchableOpacity>
            <Text style={{fontSize:15,color:'tomato',marginTop:10}} onPress={()=>{
                navigation.navigate("Signup")
            }}>new toChat?</Text>
        </View>
    )
}

export default Login