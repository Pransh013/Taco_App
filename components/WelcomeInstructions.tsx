import { View, Text, useWindowDimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { ScrollView } from "react-native";
import CustomButton from "./CustomButton";

const texts = [
  "All types of services for your pets in one place, instantly searchable",
  "All types of services for your pets in one place, instantly searchable",
  "All types of services for your pets in one place, instantly searchable",
];

const WelcomeInstructions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { width } = useWindowDimensions();

  const handleScroll = (event:any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View className="w-full px-4 mt-4">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {texts.map((text, index) => (
          <View
            key={index}
            className="flex-1 justify-center items-center"
            style={{ width: width - 70 }}
          >
            <Text className="text-sm text-black text-center w-full">
              {text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View className="flex-row justify-center items-center gap-2 mt-10 ">
        {Array(texts.length)
          .fill("")
          .map((_, idx) => (
            <View
              key={idx}
              className={`h-2 rounded-full ${
                idx === activeIndex ? "w-5 bg-black" : "w-2 bg-gray-300"
              }`}
            ></View>
          ))}
      </View>
      <CustomButton title="Get Started" handlePress={() => router.replace("/signin")} classname="bg-midnight w-full mt-10"/>
    </View>
  );
};

export default WelcomeInstructions;
