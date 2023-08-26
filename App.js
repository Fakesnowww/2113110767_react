import { StyleSheet, Text, View } from "react-native";
// import Recap from "./components/Recap";

import FlastListAPI from "./components/FlastListAPI";
import News from "./components/News";
import ProductScreen from "./components/ProductScreen";


export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <DefineStyle/> */}
      {/* <RandomUsersScreen/> */}
      {/* <FlatList_Example1/> */}
      {/* <FlatList_HeaderFooter/> */}
      {/* <FlastListAPI/> */}
      {/* <News/> */}
      <ProductScreen/>
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