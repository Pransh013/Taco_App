import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomSafeAreaView = ({
  children,
  className,
  edges,
}: {
  children: React.ReactNode;
  className?: string;
  edges?: any;
}) => {
  return (
    <SafeAreaView
      className={`flex-1 w-full bg-white p-4 ${className}`}
      edges={edges}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
