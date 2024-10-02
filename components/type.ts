// types.ts
export type RootStackParamList = {
    home: undefined; // Home screen does not expect any parameters
    explore: { uri: string }; // Explore screen expects a 'url' parameter
  };
  