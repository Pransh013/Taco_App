import Colors from "@constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colorScheme == "light" ? Colors.white : Colors.black,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    >
      {/* logo */}
      <TouchableOpacity className="mr-2">
        <Image
          source={require("@/assets/images/logo.png")}
          className="h-12 w-12 bg-white  rounded-full "
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Search input */}
      <View
        className="flex-row flex-1 items-center border-[1px] border-gray-300 px-3 py-1  mr-2 rounded-full"
        style={{
          opacity: isSearchVisible ? 1 : 0,
        }}
      >
        <TextInput
          placeholder="Search"
          placeholderTextColor="gray"
          style={{ flex: 1, opacity: isSearchVisible ? 1 : 0 }}
        />
        <TouchableOpacity onPress={toggleSearch}>
          <Ionicons
            name="close"
            size={24}
            color={colorScheme == "light" ? Colors.black : Colors.white}
          />
        </TouchableOpacity>
      </View>

      {/* Search button */}
      <TouchableOpacity onPress={toggleSearch} className="mr-2">
        <Ionicons
          name="search-outline"
          size={24}
          color={colorScheme == "light" ? Colors.black : Colors.white}
        />
      </TouchableOpacity>

      {/* Notification icon */}
      <TouchableOpacity className="mr-2">
        <Ionicons
          name="notifications-outline"
          size={24}
          color={colorScheme == "light" ? Colors.black : Colors.white}
        />
      </TouchableOpacity>

      {/* Profile icon */}
      <TouchableOpacity className="mr-2" onPress={openDrawer}>
        <Image
          source={require("@/assets/images/india_flag.png")}
          resizeMode="cover"
          className="h-12 w-12 rounded-full"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
