import { View, Text, Image } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import WelcomeInstructions from "@/components/WelcomeInstructions";
import images from "@/constants/images";

const WelcomeScreen = () => {
  return (
    <CustomSafeAreaView>
      <View className="w-full mb-4 items-center justify-center">
        <Image source={images.Logo} resizeMode="contain" />
      </View>
      <View className="mb-6">
        <Text className="text-2xl font-extrabold text-center text-black">
          Welcome to
        </Text>
        <Text className="text-2xl font-extrabold text-center text-black">
          Animal Health Care!
        </Text>
      </View>

      <Image source={images.Welcome} resizeMode="contain" />

      <WelcomeInstructions />
    </CustomSafeAreaView>
  );
};

export default WelcomeScreen;
