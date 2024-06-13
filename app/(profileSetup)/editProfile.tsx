import CustomPicker from "@/components/CustomPicker";
import LabelContainer from "@/components/LabelContainer";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const genderOptions = ["Male", "Female", "Non-Binary"];

const PetInfo = () => {
  const [userform, setUserform] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <LabelContainer label="Full Name *">
        <TextInput
          placeholderTextColor="gray"
          placeholder="Full Name"
          onChangeText={(text) => setUserform({ ...userform, name: text })}
          value={userform.name}
          className=" text-base p-2"
        />
      </LabelContainer>
      <LabelContainer label="Gender *">
        <CustomPicker
          options={genderOptions}
          selectedValue={userform.gender}
          onValueChange={(itemValue: any) =>
            setUserform({ ...userform, gender: itemValue })
          }
        />
      </LabelContainer>

      <LabelContainer label="Email Id">
        <TextInput
          placeholderTextColor="gray"
          placeholder="username@example.com"
          onChangeText={(text) => setUserform({ ...userform, email: text })}
          value={userform.email}
          className=" text-base p-2"
        />
      </LabelContainer>

      <LabelContainer label="Phone Number *">
        <View className="flex-row items-center text-base p-2">
          <Text>+91</Text>
          <TextInput
            placeholderTextColor="gray"
            onChangeText={(text) => setUserform({ ...userform, phone: text })}
            value={userform.phone}
            className=" text-base flex-1 ml-2"
          />
        </View>
      </LabelContainer>
    </>
  );
};

export default function editProfile() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView className="flex-1 p-2 bg-bgLight">
      <View className=" items-center">
        <View className=" w-[130px]    border border-midnight rounded-full">
          <Image
            source={require("@assets/images/profilePic.jpg")}
            className="rounded-full h-32 w-32"
            resizeMode="contain"
          />
          <View className="rounded-full bg-midnight absolute bottom-2 right-2">
            <Ionicons name="add" size={20} color="white" />
          </View>
        </View>
      </View>
      <Text className="font-semibold text-lg mb-2">General Information</Text>
      <PetInfo />
      <Text className="font-semibold text-lg mb-2">About Me</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        placeholder="Enter your text here..."
        style={{ height: 100, borderColor: "gray", borderWidth: 1 }}
        value={text}
        onChangeText={(text) => setText(text)}
        className="rounded p-2 mb-2"
        textAlignVertical="top"
      />
      <Button
        title="Get Started"
        color={Colors.midnight}
        onPress={() => {
          router.push("home");
        }}
      />
    </SafeAreaView>
  );
}
