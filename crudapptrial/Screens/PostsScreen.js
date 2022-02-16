import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import {db} from "../Core/Config.js"
import {deleteDoc, doc, getDoc, setDoc} from "firebase/firestore"
import {useState} from "react"

const PostsScreen = () => {

    const [userDoc,setUserDoc]=useState(null)
    const [text, setText]=useState("")
  
    const Create=()=>{
      const myDoc=doc(db,"UserPost","Posts")
      const docData={
        userId:"kno3_1608",
        followers:123,
        following:456,
        postMsg:"Be Happy",
        postDate:"2020-06-20",
        url:"https://lite-images-i.scdn.co/image/ab67616d0000b27353f6fa0d2589c6a7174f4b81",
}
      setDoc(myDoc,docData)
      .then(()=>{
        console.log(doc)
        alert("Document Created")
      })
      .catch((error)=>{alert(error.message)})
  
    }
    const Read=()=>{
        const myDoc=doc(db,"UserPost","Posts")
        getDoc(myDoc)
      .then((snapshot)=>{
        if (snapshot.exists){
          setUserDoc(snapshot.data())
  
        }
        else{
          alert("Document does not exist")
        }
      })
      .catch((error)=>{alert(error.message)})
  
      
      
    }
    // const Update=(value, merge)=>{
    //     const myDoc=doc(db,"UserPosts","Posts")
    //     setDoc(myDoc, value, {merge: merge})
    //   .then(()=>{
    //     setText("")
    //   })
    //   .catch((error)=>{alert(error.message)})
  
      
    // }
    // const Delete=()=>{
    //     const myDoc=doc(db,"UserPosts","Posts")
  
    //   deleteDoc(myDoc)
    //   .then(()=>{
    //     alert("Document SUCCESFULLY deleted")
    //   })
    //   .catch((error)=>{alert(error.message)})
  
  
      
    // }
  


  return (
    <View>
    <Button title="Create New Doc" onPress={Create}></Button>
    <Button title="Read Doc" onPress={Read}></Button>
    {
      userDoc != null &&
      <View>
      <Text>uId:{userDoc.userId}</Text>
      <Text>Followers:{userDoc.followers}</Text>
      <Text>Following:{userDoc.following}</Text>
      <Text>Message:{userDoc.postMsg}</Text>
      <Image source={{uri:userDoc.url}} style={styles.image}/>




      </View>

    }
    </View>
  )
}

export default PostsScreen

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300,
    }
})