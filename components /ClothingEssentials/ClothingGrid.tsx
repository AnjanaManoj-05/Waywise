import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type ClothingItem = {
  imageUrl: string;
  caption: string;
  wide?: boolean;
};

const coldItems: ClothingItem[] = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2cb7625fc2e1b2b5249f2b2eb3f0ee1ae235e8e3e98b0c39e0c64ef54d7c1f54?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "A fur jacket",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/381a736d3c9eaa71b94899ef6f47b54881d1cbe91db5fdf2f1c792adbbddba23?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "Long Boots",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2599c6713e8e44ef20c401d9cc3c12f3d1adf1ee948a5ac6b426f837e3c7d53f?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "Warm pair of gloves",
    wide: true,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4c7b92cded3b3c68bafeb56249cfcb24cb5c65c8efbc62e2076c54e15bdb778?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "A scarf",
  },
];

const hotItems: ClothingItem[] = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/647aa55f1877c3472824c23ae2fa85b8d58e7e6c6b1f82f8c93cb511a45d51de?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "Loose cotton pants",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/18786be27367ad9e25b9876c7a07fa46369eebc0acffcfb23dffdd39568f378e?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "Sleeveless cotton tops",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0b29cdd3fa6f6ac7a909f1fbc3c6ff10302d4790c4db4c3ec1d4cf624f4e289?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "A hat",
    wide: true,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a17045a6dc943e987a4103980e26ce6f54087b09fd38b162ebbb2f8502d2c69?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "A pair of sandals",
  },
];

const commonItems: ClothingItem[] = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d292b7c58f2fc332d342e18d3f04026e58b232398cdb237ffb26875cdd1bd5f?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "Mist spray",
    wide: true,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b3fcba52745ed11f391cc19550f2152c3b7e4b69bc95cf23bfb748b033510a9?apiKey=6d8b973b01c84059aa4e3a79c896f90f&",
    caption: "Moisturizer",
    wide: true,
  },
];

export const getClothingItems = (isCold: boolean): ClothingItem[] => {
  const selected = isCold ? coldItems : hotItems;
  return [...selected, ...commonItems];
};

const Item: React.FC<{ item: ClothingItem }> = ({ item }) => (
  <View style={styles.item}>
    <Image
      source={{ uri: item.imageUrl }}
      style={item.wide ? styles.wideImage : styles.verticalImage}
      resizeMode="cover"
    />
    <Text style={styles.caption}>{item.caption}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 8,
    alignItems: "center",
  },
  verticalImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  wideImage: {
    width: 310,
    height: 150,
    borderRadius: 12,
  },
  caption: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
});

const ClothingGrid = {
  getItems: getClothingItems,
  Item,
};

export default ClothingGrid;
