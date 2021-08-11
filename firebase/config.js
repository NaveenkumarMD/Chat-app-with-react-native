import firebase from 'firebase'
import 'firebase/firebase-firestore'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage'
var firebaseConfig = {
    apiKey: "AIzaSyDjexgVZGxNaZpM8fOMv1AAzks31D-JAu8",
    authDomain: "chatter-cf229.firebaseapp.com",
    projectId: "chatter-cf229",
    storageBucket: "chatter-cf229.appspot.com",
    messagingSenderId: "462836206418",
    appId: "1:462836206418:web:a1c5cb8fb7560e068f088b",
    measurementId: "G-1FXTP5PF8S"
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
 }else {
    firebase.app()
 }

export function Signupfunction(mail,name,number,password){
    
    firebase.auth().createUserWithEmailAndPassword(mail,password).then(async (user)=>{
        const docref=firebase.firestore().collection('users').doc(mail)
        await docref.set({
            name:name,
            mail:mail,
            number:number,
            password:password,
            username:name+number.substring(0,4)
        }).then(res=>{
            Toast.show({
                text1:'success'
            })
        }).catch(err=>{
        
        })
        Toast.show({
            text1:"sucess"
        })
    }).catch(err=>{
        Toast.show({
            type:'error',
            text1:err.message
        })
    })
}
export async function Loginfunction(mail,password){
    firebase.auth().signInWithEmailAndPassword(mail,password).then(async (user)=>{
        //console.log(user)
        console.log("final try")
        firebase.firestore().collection('users').doc(mail).get().then(async doc=>{
            console.log(doc.data().username)
            await AsyncStorage.setItem('username',doc.data().username)
        })
        
        
        Toast.show({
            text1:"Login success",
         
        })
        return true
        
    }).catch(err=>{
        Toast.show({
            type:'error',
            text1:err.message
        })
        return false
    })
}
