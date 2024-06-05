import icons from "@/constants/icons";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";


const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className="text-sm text-black ">{title}</Text>

      <View className="w-full h-12 px-4 bg-black-100 rounded-md border-[1.5px] border-slate-300 focus:border-slate-600 flex flex-row items-center">
        <TextInput
          className="flex-1 text-black font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.Eye : icons.EyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
