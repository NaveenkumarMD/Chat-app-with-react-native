import {View,Text, } from 'react-native'
import React ,{useState}from 'react'
import { TextInput,TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../Styles'
import {Ionicons} from '@expo/vector-icons'
import {Signupfunction} from '../firebase/config'
import Toast from 'react-native-toast-message';
const Signup=({navigation})=>{
    const [mail,setMail]=useState('naveen')
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")

    const signup=()=>{
     Signupfunction(mail,name,number,password)   
    }
    return(
        <View style={styles.container1}>
            <Toast ref={(ref) => Toast.setRef(ref)} />
            <Ionicons name="logo-snapchat" size={60} color="tomato" style={{marginBottom:60}}/>
            <TextInput placeholder="Email" style={styles.input} placeholderTextColor="white" onChangeText={text=>setMail(text)} />
            <TextInput placeholder="Name" style={styles.input} placeholderTextColor="white" onChangeText={text=>setName(text)} />
            <TextInput placeholder="Number" style={styles.input} placeholderTextColor="white" onChangeText={text=>setNumber(text)} />
            <TextInput placeholder="Password" style={styles.input} placeholderTextColor="white" onChangeText={text=>setPassword(text)}/>
            <TouchableOpacity onPress={()=>{
                signup()
            }} style={styles.button} ><Text style={{fontSize:18,color:'white'}}>Sign up</Text></TouchableOpacity>
            <Text style={{fontSize:15,color:'tomato',marginTop:10}} onPress={()=>{
                navigation.navigate("Login")
            }}>Already a member?</Text>
        </View>
    )
}

export default Signup