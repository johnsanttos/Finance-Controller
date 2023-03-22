
import { View,Text, StatusBar} from "react-native";
import firebase from "./src/services";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App (){
  return (
    <NavigationContainer >
      <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
      <Routes/>
    </NavigationContainer>
  )
}