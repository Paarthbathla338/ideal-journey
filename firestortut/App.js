import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {db} from "./Core/Config.js"
import {doc, getDoc, setDoc} from "firebase/firestore"
import {useState} from "react"


export default function App() {

  const [userDoc,setUserDoc]=useState(null)

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
  const Update=()=>{
    
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
      <Text>Age:{userDoc.age}</Text>
      <Text>Residence:{userDoc.residence}</Text>



      </View>

    }

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
