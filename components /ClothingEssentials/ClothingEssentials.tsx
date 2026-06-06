import * as React from "react";
import { FlatList, ListRenderItem, SafeAreaView, StyleSheet, View } from "react-native";
import { useWeatherStore } from "../../store/weatherStore";
import ItineraryFooter from "../FoodIternary/ItineraryFooter";
import ClothingGrid from "./ClothingGrid";
import { ClothingHeader } from "./ClothingHeader";

const FOOTER_HEIGHT = 80;  // Adjust based on your footer actual height

const ClothingEssentials: React.FC = () => {
  const { selectedTemperature, condition } = useWeatherStore();
  const temp = parseInt(selectedTemperature);
  const isCold = condition.toLowerCase().includes("snow") || temp < 20;

  const clothingItems = ClothingGrid.getItems(isCold);

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <ClothingGrid.Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clothingItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        ListHeaderComponent={<ClothingHeader />}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: FOOTER_HEIGHT + 20 }]} 
        showsVerticalScrollIndicator={false}
      />

      <View style={[styles.footer, { height: FOOTER_HEIGHT }]}>
        <ItineraryFooter />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopColor: "#ddd",
    
    // elevation or shadow styles if needed
  },
});

export default ClothingEssentials;
