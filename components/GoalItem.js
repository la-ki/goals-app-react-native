import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ title, onDelete, id }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
