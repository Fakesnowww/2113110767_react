
import { StyleSheet, Text, View } from "react-native";
import React  from "react";
import UseEffectFlatList from "./components/useEffectFlatList";
// import TouchablePractice from "./TouchablePractice";
// import Example_useEffect from "./components/Example_useEffect";
//sss


const App =() =>{
  return(
    <View style={{flex:1 }}>
      {/* // <TouchablePractice/> */}
      {/* <Example_useEffect/> */}
      <UseEffectFlatList/>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

