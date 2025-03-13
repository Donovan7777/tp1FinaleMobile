import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Définition du composant HomeScreen
export default function HomeScreen() {
  return (
    // Conteneur principal qui centre le texte
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue sur l'écran Accueil 🏠</Text>
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
