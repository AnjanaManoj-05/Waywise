import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface DishCardProps {
  image: string;
  name: string;
  onAdd: () => void;
}

export const DishCard: React.FC<DishCardProps> = ({ image, name, onAdd }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 119,
    height: 230,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    aspectRatio: 1.02,
    borderRadius: 45,
    alignSelf: 'stretch',
  },
  name: {
    fontSize: 18,
    color: '#1C1917',
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#0891B2',
    borderRadius: 6,
    width: 79,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});
