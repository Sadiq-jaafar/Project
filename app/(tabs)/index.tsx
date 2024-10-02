import { Image, StyleSheet, Platform, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/button1"; // Make sure the path is correct

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A4B4B9FF", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/senate22.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.titleContainer}>
        <ThemedText type="title">Welcome!!!!!</ThemedText>
      </View>
      <View style={styles.portal}>
        <View style={styles.stepContainer}>
          <ThemedText type="subtitle">ABU Site</ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Access ABU site</ThemedText>
          </ThemedText>
        </View>
        <View>
          <Button title="Open ABU Site" uri="https://abu.edu.ng/" />
        </View>
      </View>

      {/* Passing URLs to buttons */}

      <View style={styles.portal}>
        <View style={styles.stepContainer}>
          <ThemedText type="subtitle">ABU Student Portal</ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">
              Access ABU Student Portal
            </ThemedText>
          </ThemedText>
        </View>
        <View>
          <Button title="Open Portal" uri="https://portal.abu.edu.ng/" />
        </View>
      </View>

      <View style={styles.portal}>
        <View style={styles.stepContainer}>
          <ThemedText type="subtitle">ABU Portal</ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Access ABU Portal</ThemedText>
          </ThemedText>
        </View>
        <View>
          <Button title="Open Portal" uri="https://www.google.com" />
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  portal: {
    backgroundColor: "#A4B4B9FF",
    borderRadius: 10,
    alignItems: "center",
    height: 150,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 395,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
