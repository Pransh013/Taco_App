import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type CustomHeaderProps = {
  title: string;
  onLeave: () => void;
};
const CustomHeader = ({ title, onLeave }: CustomHeaderProps) => {
  return (
    <View className="w-full fixed top-0 bg-black flex-row items-center justify-start h-12 pl-5 dark:border-b dark:border-slate-600">
      <AntDesign name="arrowleft" size={24} color="white" onPress={onLeave} />
      <Text className="text-white font-semibold text-lg pl-4 pt-1">
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;
