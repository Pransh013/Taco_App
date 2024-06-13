import CustomHeader from "@/components/CustomHeader";
import CustomPicker from "@/components/CustomPicker";
import Header from "@/components/Header";
import LabelContainer from "@/components/LabelContainer";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const speciesOptions = [
  "Dog",
  "Cat",
  "Bird",
  "Fish",
  "Reptile",
  "Small Mammal",
  "Other",
];

const breedOptions = [
  "Poodle",
  "Golden Retriever",
  "Siamese",
  "Cockatiel",
  "Guppy",
  "Bearded Dragon",
  "Hamster",
  "Other",
];

const sizeOptions = ["Small", "Medium", "Large", "Extra Large", "Other"];

const genderOptions = ["Male", "Female", "Other"];

const PetInfo = () => {
  const [petform, setPetForm] = useState({
    name: "",
    species: "",
    breed: "",
    size: "",
    gender: "",
    dob: "",
  });

  return (
    <>
      <LabelContainer label="Pet's Name">
        <TextInput
          placeholderTextColor="gray"
          placeholder="Pet's Name"
          onChangeText={(text) => setPetForm({ ...petform, name: text })}
          value={petform.name}
          className=" text-base p-2"
        />
      </LabelContainer>
      <LabelContainer label="Species *">
        <CustomPicker
          options={speciesOptions}
          selectedValue={petform.species}
          onValueChange={(itemValue: any) =>
            setPetForm({ ...petform, species: itemValue })
          }
        />
      </LabelContainer>
      <LabelContainer label="Breed *">
        <CustomPicker
          options={breedOptions}
          selectedValue={petform.breed}
          onValueChange={(itemValue: any) =>
            setPetForm({ ...petform, breed: itemValue })
          }
        />
      </LabelContainer>
      <LabelContainer label="Size">
        <CustomPicker
          options={sizeOptions}
          selectedValue={petform.size}
          onValueChange={(itemValue: any) =>
            setPetForm({ ...petform, size: itemValue })
          }
        />
      </LabelContainer>
      <LabelContainer label="Gender *">
        <CustomPicker
          options={genderOptions}
          selectedValue={petform.gender}
          onValueChange={(itemValue: any) =>
            setPetForm({ ...petform, gender: itemValue })
          }
        />
      </LabelContainer>
      <LabelContainer label="Date of Birth *">
        <TextInput
          placeholderTextColor="gray"
          placeholder="DD/MM/YYYY"
          onChangeText={(text) => setPetForm({ ...petform, dob: text })}
          value={petform.dob}
          className=" text-base p-2"
        />
      </LabelContainer>
    </>
  );
};

export default function addYourPet() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView className="flex-1  bg-bgLight">
      <CustomHeader
        title="Add Your Pet"
        onLeave={() => {
          router.replace("signin");
        }}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className=" p-2">
        <View className=" items-center">
          <View className=" w-[130px]    border border-midnight rounded-full">
            <Image
              source={require("@assets/images/dog2.jpg")}
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
        <Text className="font-semibold text-lg mb-2">
          Additional Information
        </Text>
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
        <View className="mb-12">
          <Button
            title="Submit"
            color={Colors.midnight}
            onPress={() => {
              router.push("home");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
