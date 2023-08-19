import { StyleSheet, Text, View } from "react-native";
// import Recap from "./components/Recap";
import DefineStyle from "./components/DefineStyle";
import RandomUsersScreen from "./components/RandomUsersScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <DefineStyle/> */}/
      <RandomUsersScreen/>
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