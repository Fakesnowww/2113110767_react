import { StyleSheet, Text, View } from "react-native";
// import Recap from "./components/Recap";
import DefineStyle from "./components/DefineStyle";
import RandomUsersScreen from "./components/RandomUsersScreen";
import FlatList_Example1 from "./components/FlatList_Example1";
import FlatList_HeaderFooter from "./FlatList_HeaderFooter";


export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <DefineStyle/> */}/
      {/* <RandomUsersScreen/> */}
      {/* <FlatList_Example1/> */}
      <FlatList_HeaderFooter/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});