import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {db} from "./Core/Config.js"
import {doc, getDoc, setDoc} from "firebase/firestore"
import {useState} from "react"


export default function App() {

  const [userDoc,setUserDoc]=useState(null)
  const [text, setText]=useState("")

  const Create=()=>{
    const myDoc=doc(db,"MyCollection","MyDoc")
    const docData={
      name:"Paarth",
      age:14,
      residence:"newDelhi"
    }
    setDoc(myDoc,docData)
    .then(()=>{
      alert("Document Created")
    })
    .catch((error)=>{alert(error.message)})

  }
  const Read=()=>{
    const myDoc=doc(db,"MyCollection","MyDoc")
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
  const Update=(value, merge)=>{
    const myDoc=doc(db,"MyCollection","MyDoc")
    setDoc(myDoc, value, {merge: merge})
    .then(()=>{
      setText("")
    })
    .catch((error)=>{alert(error.message)})

    
  }
  const Delete=()=>{
    
  }








  return (
    <View style={styles.container}>
    <Button title="Create New Doc" onPress={Create}></Button>
    <Button title="Read Doc" onPress={Read}></Button>
    {
      userDoc != null &&
      <View>
      <Text>Name:{userDoc.name}</Text>



      </View>

    }

    <TextInput placeholder="updateValue" onChangeText={(text)=>{setText(text)}} value={text}></TextInput>
    
    
    <Button title="Update Doc" onPress={Update} onPress={()=>{
      Update({
        "name":text
      },true)
    }} disabled={text==""}></Button>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
