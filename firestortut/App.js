import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {db} from "./Core/Config.js"

export default function App() {

  const Create=()=>{

  }
  const Read=()=>{
    
  }
  const Update=()=>{
    
  }
  const Delete=()=>{
    
  }








  return (
    <View style={styles.container}>
    <Button title="Create New Doc"></Button>
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
