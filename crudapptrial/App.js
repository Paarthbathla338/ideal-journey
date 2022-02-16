import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons,Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome,SimpleLineIcons,Fontisto } from '@expo/vector-icons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Screens/HomeScreen";
import PostsScreen from "./Screens/PostsScreen";


export default function App() {
  const Stack = createNativeStackNavigator();

  const Tabs= createBottomTabNavigator();

  return (
    <NavigationContainer >

<Tabs.Navigator>

<Tabs.Screen name="Home" component={HomeScreen}         options={{
  tabBarIcon: ({ color }) => <Entypo name="home" size={30}  color={color} style={{fontSize:35}}  />,
}} 
/>

<Tabs.Screen name="Profile" component={PostsScreen} options={{
  tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={30}  color={color} style={{fontSize:35}}  />,
}}/>




</Tabs.Navigator>
</NavigationContainer>
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
