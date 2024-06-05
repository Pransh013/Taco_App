import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { styled } from "nativewind";
import { useState } from "react";
import { View, Text, TextInput, Button, Alert, Pressable } from "react-native";

const SocialButton = styled(
  Pressable,
  "items-center justify-center border border-gray-200 py-3 px-6 rounded"
);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {};

  const handleSocialSignIn = (platform: string) => {
    Alert.alert("Social Sign In", `Sign in with ${platform}`);
  };

  return (
    <CustomSafeAreaView className="bg-black">
      <View className="w-full items-center">
        <Text className="text-2xl font-bold text-midnight">
          Animal Health Care
        </Text>
      </View>
      <View className="w-full my-4">
        <Text className="text-3xl font-bold max-w-[60%] mb-2">
          Login to your account
        </Text>
        <Text className="text-sm max-w-[70%]">
          Personalize your pet's page with photos, details and memories
        </Text>
      </View>
      <View className="justify-center items-end p-4 my-4 bg-white">
        <TextInput
          className="h-10 w-full border border-gray-300 mb-3 px-2 rounded-lg"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="h-10 w-full border border-gray-300 mb-3 px-2 rounded-lg"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <Text className="text-blue-600 mb-1">Forgot Password?</Text>
        <Pressable
          className="bg-midnight w-full h-10 justify-center items-center rounded-md"
          onPress={handleSignIn}
        >
          <Text className="text-white">Sign in</Text>
        </Pressable>
      </View>
      <View className="mt-4 flex-row justify-around items-center">
        <View className="bg-gray-400 w-20 h-[.5px]"></View>
        <Text className="text-gray-400">or continue with</Text>
        <View className="bg-gray-400 w-20 h-[.5px]"></View>
      </View>
      <View className="my-4 flex-row justify-around">
        <SocialButton onPress={() => handleSocialSignIn("Facebook")}>
          <Ionicons name="logo-facebook" size={20} color="blue" />
        </SocialButton>
        <SocialButton onPress={() => handleSocialSignIn("Google")}>
          <Ionicons name="logo-google" size={20} color="red" />
        </SocialButton>
        <SocialButton onPress={() => handleSocialSignIn("Apple")}>
          <Ionicons name="logo-apple" size={20} color="black" />
        </SocialButton>
      </View>

      <View className="flex-row mt-4 items-center justify-center">
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => router.replace("/signup")}>
          <Text className="text-blue-600 underline">Sign up</Text>
        </Pressable>
      </View>
    </CustomSafeAreaView>
  );
};

export default Signin;
