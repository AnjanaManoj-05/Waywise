import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categoryList = [
  {
    label: "Lakes",
    icon: "https://res.cloudinary.com/db4ayioxs/image/upload/v1747238002/uploads/1747238002333-lake.PNG.png",
  },
  {
    label: "Sea",
    icon: "https://res.cloudinary.com/db4ayioxs/image/upload/v1747242984/uploads/1747242984601-sea.PNG.png",
  },
  {
    label: "Mountain",
    icon: "https://res.cloudinary.com/db4ayioxs/image/upload/v1747243063/uploads/1747243063335-moun.PNG.png",
  },
  {
    label: "Forest",
    icon: "https://res.cloudinary.com/db4ayioxs/image/upload/v1747237919/uploads/1747237918729-forest.PNG.png",
  },
];

export const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <>
      <Text style={styles.title}>    Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.container}
      >
        {categoryList.map((category) => {
          const isSelected = selectedCategory === category.label;

          return (
            <TouchableOpacity
              key={category.label}
              style={[
                styles.categoryButton,
                isSelected && styles.selectedButton,
              ]}
              onPress={() => onSelectCategory(category.label)}
            >
              <Image
                source={{ uri: category.icon }}
                style={styles.categoryIcon}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.buttonText,
                  isSelected && styles.selectedText,
                ]}
              >
                {category.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 36,
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1917",
  },
  scrollContainer: {
    marginTop: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: "#008FA0",
    borderColor: "#008FA0",
  },
  categoryIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 12,
    color: "#1C1917",
  },
  selectedText: {
    color: "white",
    fontWeight: "600",
  },
});
