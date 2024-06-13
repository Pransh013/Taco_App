import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import FormField from "@/components/FormField";
import images from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { styled } from "nativewind";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const SocialButton = styled(
  Pressable,
  "items-center justify-center border border-gray-200 py-3 px-6 rounded"
);

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = () => {
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
          Login to your account
        </Text>
        <Text className="text-sm max-w-[70%]">
          Personalize your pet's page with photos, details and memories
        </Text>
      </View>
      <View className="justify-center items-end px-4 bg-white">
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
        <Text className="text-blue-600 mb-6 mt-2">Forgot Password?</Text>
        <Pressable
          className="bg-midnight w-full h-10  justify-center items-center rounded-md"
          onPress={handleSignIn}
        >
          <Text className="text-white">Sign in</Text>
        </Pressable>
      </View>
      <View className="flex-row mt-8 justify-around items-center">
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
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => router.replace("/signup")}>
          <Text className="text-blue-600 underline">Sign up</Text>
        </Pressable>
      </View>
    </CustomSafeAreaView>
  );
};

export default Signin;
