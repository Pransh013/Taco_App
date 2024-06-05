import Colors from "@constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        paddingVertical: 2,
      }}
    >
      {/* Profile icon */}
      <TouchableOpacity className="mr-2">
        <Image
          source={require("@/assets/images/user-Profile_icon.png")}
          resizeMode="cover"
          className="h-14 w-14 rounded-full"
        />
      </TouchableOpacity>
      <View className="flex-1">
        <Text className="text-base">
          Hello, <Text className="font-bold">Chetan</Text> 👋
        </Text>
        <Text className="text-sm text-gray-500">
          How's your pet doing today
        </Text>
      </View>

      {/* Search button */}
      <TouchableOpacity className="mr-2">
        <Ionicons name="search-outline" size={24} color={Colors.black} />
      </TouchableOpacity>

      {/* Notification icon */}
      <TouchableOpacity className="mr-2">
        <Ionicons name="notifications-outline" size={24} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
