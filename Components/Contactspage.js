import styles from "../Styles"
import React ,{useEffect,useState}from 'react'
import {View,Text, Button} from 'react-native'
import {getcontactsfuction} from '../firebase/config'
import firebase from 'firebase'
import 'firebase/firebase-firestore'
import { Ionicons } from "@expo/vector-icons"
import { FlatList } from "react-native-gesture-handler"
import AsyncStorage from "@react-native-async-storage/async-storage"
class Contactspage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            mainuser:''
        }
        this.db=firebase.firestore()
    }
    componentDidMount(){
        
        this.setState({mainuser:this.props.route.params.mainuser})
        console.log(this.state.mainuser)
        this.db.collection('users').onSnapshot(query=>{
            var arr=[]
            query.forEach(doc=>{
                arr.push(doc.data().username)
            })
            this.setState({
                data:arr
            })
        })

    }
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
    render(){
        return(
            <View >
                    <FlatList data={this.state.data} renderItem={(a)=>{
                        if(a.item==this.state.mainuser){
                            return true
                        }
                        return(
                            <View>
                                <Text style={styles.item1} onPress={()=>{
                                    this.props.navigation.navigate("Chatpage",{
                                        users:{
                                            username:a.item,
                                            mainuser:this.state.mainuser
                                        }
                                        
                                    })
                                }}>{a.item}</Text>
                            </View>
                        
                        )
                    }} 
                    ItemSeparatorComponent={this.ItemSeparatorView}
                    />
                
            </View>
        )
    }
}
export default Contactspage