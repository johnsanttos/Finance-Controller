
import { View,Text, StatusBar} from "react-native";
import AuthProvider from "./src/context/auth";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App (){
  return (
    <NavigationContainer >
      <AuthProvider>
      <StatusBar backgroundColor="#0000ff" barStyle="light-content"/>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}