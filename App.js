import { StyleSheet, Text, View } from "react-native";
import ViewBoxesWithColorAndText from "./components/ViewBoxesWithColorAndText";
// import DisplayandImage from "./components/DisplayandImage";
// import LotsOfGreeting from "./components/LotsOfGreeting";
// import Customtext from "./components/Customtext";
import Counter from "./Counter";
import Myinput from "./Myinput";
import IncrementCounter from "./incrementCounter";
import Form from "./Form";
import Login from "./Login";
import TouchablePractice from "./TouchablePractice";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewBoxesWithColorAndText/> */}
      {/*<DisplayandImage />*/}
      {/*<LotsOfGreeting/>*/}
      {/* <Customtext/> */}
      {/* <Counter /> */}
      {/* <Myinput/> */}
      {/* <Form/> */}
      {/* <IncrementCounter/> */}
      {/* <Login/> */}
      <TouchablePractice/>
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
