import Colors from "@/constants/Colors";
import Appointment from "@app/(tabs)/appointment";
import Home from "@app/(tabs)/home";
import Menu from "@app/(tabs)/menu";
import Services from "@app/(tabs)/services";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { BackHandler, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

const TabIcon = ({ iconName, title, color, focused }: any) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", gap: 2 }}>
      <Ionicons name={iconName} size={24} color={color} />
      <Text
        style={{
          fontSize: 12,
          color: color,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      // Add hardware back press listener
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => {
        // Remove the hardware back press listener when the component is unmounted
        backHandler.remove();
      };
    }, [])
  );

  return (
    <SafeAreaView className="flex-1">
      {/* <Header /> */}
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#899499",
          tabBarActiveTintColor: Colors.black,

          tabBarStyle: {
            backgroundColor: Colors.white,
            height: Platform.OS === "ios" ? 80 : 60,
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName={focused ? "home" : "home-outline"}
                title="Home"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="services"
          component={Services}
          options={{
            headerShown: false,

            title: "Services",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName={focused ? "paw" : "paw-outline"}
                title="Services"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="appointment"
          component={Appointment}
          options={{
            headerShown: false,

            title: "Appointment",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName={focused ? "journal" : "journal-outline"}
                title="Appointment"
                color={color}
                focused={focused}
              />
            ),
          }}
        />

        <Tab.Screen
          name="menu"
          component={Menu}
          options={{
            headerShown: false,
            title: "Menu",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName={focused ? "menu" : "menu-outline"}
                title="Menu"
                color={color}
                focused={focused}
              />
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              if (true) {
                e.preventDefault();
              }
            },
          })}
        />
      </Tab.Navigator>
      <StatusBar backgroundColor="black" style="light" />
    </SafeAreaView>
  );
};

export default TabsLayout;
