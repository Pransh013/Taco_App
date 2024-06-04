import React from "react";
import { ScrollView } from "react-native";

export default function CustomScrollView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      {children}
    </ScrollView>
  );
}
