import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {db} from "./Core/Config.js"
import {doc, setDoc} from "firebase/firestore"


export default function App() {


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
    
  }
  const Update=()=>{
    
  }
  const Delete=()=>{
    
  }








  return (
    <View style={styles.container}>
    <Button title="Create New Doc" onPress={Create}></Button>
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
