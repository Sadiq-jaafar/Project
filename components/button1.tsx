import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "./type"; // Import the types

interface ButtonProps {
  title?: string;
  uri: string;
}

const Button: React.FC<ButtonProps> = ({ title = "Open Website", uri }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("explore", { uri }); // Passing the URI to ExploreScreen
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "green",
    width: 250,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Button;
