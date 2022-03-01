import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../components/Themed";
export default function ListItem({ item }: any) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
  },
  listItemView: {},
  listItemText: {},
});
