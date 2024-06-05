import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function ProfileLayout() {
  return (
    <>
      <Stack initialRouteName="addYourPet">
        <Stack.Screen name="addYourPet" options={{ headerShown: false }} />
        <Stack.Screen name="editProfile" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="black" style="light" />
    </>
  );
}
