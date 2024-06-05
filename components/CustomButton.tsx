import { Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  classname?: string;
  isLoading?: boolean;
  textStyles?: string;
};

const CustomButton = ({
  title,
  handlePress,
  classname,
  isLoading,
  textStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`rounded-lg h-12 w-36 justify-center items-center ${classname} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      activeOpacity={0.7}
    >
      <Text className={`font-psemibold text-white text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
