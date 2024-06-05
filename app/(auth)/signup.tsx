import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import FormField from "@/components/FormField";
import images from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { styled } from "nativewind";
import { useState } from "react";
import { Image } from "react-native";
import { View, Text, TextInput, Button, Alert, Pressable } from "react-native";

const SocialButton = styled(
  Pressable,
  "items-center justify-center border border-gray-200 py-3 px-6 rounded"
);

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignup = () => {
    router.push("addYourPet");
  };

  return (
    <CustomSafeAreaView className="bg-black">
      <View className="w-full mb-4 items-center justify-center">
        <Image source={images.Logo} resizeMode="contain" />
      </View>
      <View className="w-full items-center mt-4">
        <Text className="text-2xl font-bold text-midnight">
          Animal Health Care
        </Text>
      </View>
      <View className="w-full my-4">
        <Text className="text-3xl font-bold max-w-[60%] mb-2">
          Create your account
        </Text>
        <Text className="text-sm max-w-[70%]">
          Personalize your pet's page with photos, details and memories
        </Text>
      </View>
      <View className="justify-center px-4 bg-white">
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e: any) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e: any) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
        />
        <Pressable
          className="bg-midnight h-10 mt-8 justify-center items-center rounded-md"
          onPress={handleSignup}
        >
          <Text className="text-white">Sign up</Text>
        </Pressable>
      </View>
      <View className="mt-10 flex-row justify-around items-center">
        <View className="bg-gray-400 w-20 h-[.5px]"></View>
        <Text className="text-gray-400">or continue with</Text>
        <View className="bg-gray-400 w-20 h-[.5px]"></View>
      </View>
      <View className="my-4 flex-row justify-around">
        <SocialButton onPress={() => {}}>
          <Ionicons name="logo-facebook" size={20} color="blue" />
        </SocialButton>
        <SocialButton onPress={() => {}}>
          <Ionicons name="logo-google" size={20} color="red" />
        </SocialButton>
        <SocialButton onPress={() => {}}>
          <Ionicons name="logo-apple" size={20} color="black" />
        </SocialButton>
      </View>

      <View className="flex-row mt-4 items-center justify-center">
        <Text>Already have an account? </Text>
        <Pressable onPress={() => router.replace("/signin")}>
          <Text className="text-blue-600 underline">Sign in</Text>
        </Pressable>
      </View>
    </CustomSafeAreaView>
  );
};

export default Signup;
