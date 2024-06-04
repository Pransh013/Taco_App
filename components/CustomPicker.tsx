import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CustomPicker = ({ options, selectedValue, onValueChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOptionPress = (itemValue) => {
    onValueChange(itemValue);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="flex-row justify-between items-center rounded-lg h-10   p-2"
      >
        <Text
          className="text-black  mr-2 text-base"
          style={selectedValue ? {} : { color: "gray" }}
        >
          {selectedValue ? selectedValue : "Select"}
        </Text>
        <Ionicons name="chevron-down-outline" size={16} color="#666" />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View
          style={styles.modalContainer}
          className="flex-1 justify-center items-center "
        >
          <View className="w-[80%] bg-bgLight  rounded-lg p-5">
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleOptionPress(item)}
                  className="py-2"
                >
                  <Text className="text-black ">{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="mt-5 items-center"
            >
              <Text className=" text-[#4a6ae7]">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

export default CustomPicker;
