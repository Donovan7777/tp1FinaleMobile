import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Définition du composant MapScreen
export default function MapScreen() {
  // États pour gérer l'affichage des marqueurs sur la carte
  const [showMarker1, setShowMarker1] = useState(false);
  const [showMarker2, setShowMarker2] = useState(false);
  const [showMarker3, setShowMarker3] = useState(false);

  return (
    <View style={styles.container}>
      {/* Affichage de la carte avec une région initiale */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.5017, // Latitude initiale
          longitude: -73.5673, // Longitude initiale
          latitudeDelta: 0.05, // Zoom sur la latitude
          longitudeDelta: 0.05, // Zoom sur la longitude
        }}
      >
        {/* Affichage des marqueurs en fonction des états */}
        {showMarker1 && <Marker coordinate={{ latitude: 45.5017, longitude: -73.5673 }} title="Marker 1" />}
        {showMarker2 && <Marker coordinate={{ latitude: 45.508, longitude: -73.554 }} title="Marker 2" />}
        {showMarker3 && <Marker coordinate={{ latitude: 45.495, longitude: -73.58 }} title="Marker 3" />}
      </MapView>

      {/* Composants pour activer/désactiver l'affichage des marqueurs */}
      <View style={styles.checkboxContainer}>
        <Text>Afficher Marker 1</Text>
        <Switch value={showMarker1} onValueChange={setShowMarker1} />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>Afficher Marker 2</Text>
        <Switch value={showMarker2} onValueChange={setShowMarker2} />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>Afficher Marker 3</Text>
        <Switch value={showMarker3} onValueChange={setShowMarker3} />
      </View>
    </View>
  );
}

// Styles appliqués aux différents composants
const styles = StyleSheet.create({
  container: { 
    flex: 1, // Prend tout l'espace disponible
  },
  map: { 
    flex: 1, // La carte prend tout l'espace disponible
  },
  checkboxContainer: { 
    flexDirection: 'row', // Affichage horizontal (texte + bouton switch)
    alignItems: 'center', // Alignement vertical au centre
    margin: 10, // Espacement entre les éléments
  },
});
