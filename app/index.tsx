import { router } from "expo-router";
import React from "react";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Signin from "./(auth)/signin";

export default function index() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Signin/>
      {/* <Button
        title="Profile Setup"
        onPress={() => router.push("addYourPet")}
      ></Button> */}
    </SafeAreaView>
  );
}
