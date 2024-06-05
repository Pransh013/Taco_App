import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <ScrollView className="p-3 ">
      {/* reminders */}
      <ScrollView
        className="flex-row gap-3"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={style.shadow}
          className="w-32 h-40 border border-gray-300 bg-sky-100 justify-center items-center rounded-lg "
        >
          <View className="rounded-full bg-midnight mb-2">
            <Ionicons name="add" size={20} color="white" />
          </View>
          <Text className="font-semibold">Add Reminder</Text>
        </View>
        <View
          style={style.shadow}
          className="w-32 h-40 border border-gray-300 bg-white  justify-center items-center rounded-lg "
        >
          <FontAwesome5 name="syringe" size={24} color="black" />

          <Text className="font-semibold mt-2">Bella's Vaccine</Text>
          <Text className=" mt-1 text-gray-500  text-xs">22/07/2024</Text>
        </View>

        <View
          style={style.shadow}
          className="w-32 h-40 border border-gray-300 bg-white  justify-center items-center rounded-lg "
        >
          <FontAwesome5 name="syringe" size={24} color="black" />
          <Text className="font-semibold mt-2">Raty's Vaccine</Text>
          <Text className=" mt-1 text-gray-500  text-xs">25/08/2024</Text>
        </View>

        <View
          style={style.shadow}
          className="w-32 h-40 border border-gray-300  bg-white justify-center items-center rounded-lg "
        >
          <FontAwesome5 name="syringe" size={24} color="black" />
          <Text className="font-semibold mt-2">Bella's Grooming</Text>
          <Text className=" mt-1 text-gray-500  text-xs">22/09/2024</Text>
        </View>
      </ScrollView>

      {/* Location */}
      <View className="bg-white mt-4 items-center justify-center pt-2 rounded-lg">
        <View className="flex-row px-2">
          <Ionicons name="location" size={20} />
          <View className="flex-1 ml-1">
            <Text className="font-semibold">Pet Location</Text>
          </View>
          <Text className="mr-1">Track Pets</Text>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
        <Image
          resizeMode="contain"
          className="w-[360px] h-[240px]"
          source={require("@assets/images/map.png")}
        />
      </View>

      <View className="bg-white mt-4 rounded-lg p-2 mb-8">
        {/* Todays Activity */}
        <View className="flex-row px-2 pb-2 gap-2">
          <Ionicons name="today" size={20} />
          <View className="flex-1">
            <Text className="font-semibold">Today's Activity</Text>
          </View>
          <Text className="text-blue-500">Show all</Text>
        </View>

        <ScrollView
          className="flex-row gap-3"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={style.shadow}
            className="w-32 h-32 border border-gray-300 bg-sky-100 justify-center items-center rounded-lg "
          >
            <Ionicons name="paw-outline" size={50} />
            <View className=" absolute rounded-full border-2 bg-sky-100 left-[54%] top-[58%] ">
              <MaterialCommunityIcons
                name="plus-minus"
                size={18}
                color="black"
              />
            </View>
          </View>
          <View
            style={style.shadow}
            className="w-32 h-32 border border-gray-300 bg-white overflow-hidden items-center rounded-lg "
          >
            <Image
              resizeMode="cover"
              className="w-32 h-[102px]"
              source={require("@assets/images/dog1.jpg")}
            />
            <View className=" absolute h-6 w-6 border-4 right-1 top-1 border-white  bg-green-500 rounded-full"></View>
            <Text className=" mt-1 text-gray-500  text-xs">22/07/2024</Text>
          </View>

          <View
            style={style.shadow}
            className="w-32 h-32 border border-gray-300 bg-white overflow-hidden items-center rounded-lg "
          >
            <Image
              resizeMode="cover"
              className="w-32 h-[102px]"
              source={require("@assets/images/dog3.jpg")}
            />
            <View className=" absolute h-6 w-6 border-4 right-1 top-1 border-white  bg-yellow-500 rounded-full"></View>
            <Text className=" mt-1 text-gray-500  text-xs">22/07/2024</Text>
          </View>
          <View
            style={style.shadow}
            className="w-32 h-32 border border-gray-300 bg-white overflow-hidden items-center rounded-lg "
          >
            <Image
              resizeMode="cover"
              className="w-32 h-[102px]"
              source={require("@assets/images/dog2.jpg")}
            />
            <View className=" absolute h-6 w-6 border-4 right-1 top-1 border-white  bg-yellow-500 rounded-full"></View>
            <Text className=" mt-1 text-gray-500  text-xs">22/07/2024</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
