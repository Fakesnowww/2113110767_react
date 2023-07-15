import { View, Text } from "react-native";
import React from "react";

const MyCustomTextWith = ({ fname, lname }) => {
  return (
    <View>
      <Text>{"\n"}</Text>
      <Text>
        Your First Name is {fname}! and Last name is {lname}
      </Text>
    </View>
  );
};

const CustomText = () => {
  return (
    <View style={{ alignItems: "center", top: 50 }}>
      <MyCustomTextWith fname="Boonyasith" lname="Sawangroj" />
      <MyCustomTextWith fname="Natthapum" lname="Kongsatjaviwat" />
    </View>
  );
};

export default CustomText;
