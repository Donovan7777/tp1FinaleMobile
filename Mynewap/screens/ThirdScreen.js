import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Définition du composant ThirdScreen
export default function ThirdScreen() {
  return (
    // Conteneur principal qui centre le texte
    <View style={styles.container}>
      <Text style={styles.text}>Ceci est le Troisième Écran 📱</Text>
    </View>
  );
}

// Styles appliqués au conteneur et au texte
const styles = StyleSheet.create({
  container: { 
    flex: 1, // Prend toute la hauteur disponible
    justifyContent: 'center', // Centre verticalement
    alignItems: 'center' // Centre horizontalement
  },
  text: { 
    fontSize: 20, // Taille du texte
    fontWeight: 'bold' // Met le texte en gras
  },
});
