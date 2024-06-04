import React from "react";
import { Text, View } from "react-native";

const LabelContainer = ({ children, label }) => {
  return (
    <>
      <View className="py-1 px-2 my-2 border border-gray-500 rounded">
        <Text className=" absolute mb-1 left-4 top-[-10] font-semibold bg-bgLight px-1 ">
          {label}
        </Text>
        {children}
      </View>
    </>
  );
};

export default LabelContainer;
