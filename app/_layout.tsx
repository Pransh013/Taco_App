import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      <StatusBar
        backgroundColor="black"
        style="light"
        translucent={true}
        hidden={false}
      />

      <SafeAreaProvider>
        <Stack initialRouteName="index">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="(profileSetup)"
            options={{ headerShown: false }}
          />
        </Stack>
      </SafeAreaProvider>
    </>
  );
}
