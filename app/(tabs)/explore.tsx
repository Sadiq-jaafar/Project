import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";
import { useRoute, RouteProp } from "@react-navigation/native";

// Define the route params type
type ExploreScreenRouteProp = RouteProp<{ params: { uri: string } }, "params">;

const ExploreScreen: React.FC = () => {
  const route = useRoute<ExploreScreenRouteProp>(); // Get the initial URL from route params
  const [url, setUrl] = useState(route.params?.uri || ""); // Initialize with the passed URI
  const [currentUrl, setCurrentUrl] = useState(url); // State to control the WebView's current URL

  // useEffect to listen for route changes and update WebView source accordingly
  useEffect(() => {
    if (route.params?.uri) {
      setUrl(route.params.uri);
      setCurrentUrl(route.params.uri); // Update WebView when route param changes
    }
  }, [route.params?.uri]);

  const handleGo = () => {
    if (url) {
      setCurrentUrl(url); // Update the WebView's source with the new URL
    }
  };

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter URL"
          value={url}
          onChangeText={setUrl} // Update input field
        />
        {/* Custom Button */}
        <TouchableOpacity style={styles.button} onPress={handleGo}>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableOpacity>
      </View>

      {/* WebView */}
      <WebView
        key={currentUrl} // Force re-render by updating the key when URL changes
        source={{ uri: currentUrl }} // Use 'currentUrl' for WebView source
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loadingIndicator}
          />
        )}
        onError={({ nativeEvent }) => {
          console.warn("WebView error: ", nativeEvent);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the entire screen
    paddingTop: 50,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginRight: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "green", // Set button color to green
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Border radius of 20
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white", // Set text color to white
    fontWeight: "bold",
    fontSize: 16,
  },
  loadingIndicator: {
    flex: 1, // Center the indicator
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExploreScreen;
