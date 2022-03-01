import { FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { v4 as uuidv4 } from "uuid";
export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Milk" },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <FlatList data={items} renderItem={({ item }) => <Text>{item}</Text>} /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
