import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';

// Importation des écrans du projet
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ThirdScreen from './screens/ThirdScreen';

// Création du Drawer Navigator (menu latéral)
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // Le NavigationContainer permet de gérer la navigation dans l'application
    <NavigationContainer>
      {/* Définition du menu Drawer avec l'écran Accueil par défaut */}
      <Drawer.Navigator initialRouteName="Accueil">
        
        {/* Écran Accueil avec une icône personnalisée */}
        <Drawer.Screen 
          name="Accueil" 
          component={HomeScreen} 
          options={{ 
            title: 'Accueil', // Nom affiché dans le menu
            drawerIcon: ({ size }) => (
              <Image source={require('./assets/home.png')} style={{ width: size, height: size }} />
            ),
          }} 
        />

        {/* Écran Map avec une icône de carte */}
        <Drawer.Screen 
          name="Map" 
          component={MapScreen} 
          options={{ 
            title: 'Map',
            drawerIcon: ({ size }) => (
              <Image source={require('./assets/map.png')} style={{ width: size, height: size }} />
            ),
          }} 
        />

        {/* Troisième écran avec une icône spécifique */}
        <Drawer.Screen 
          name="Troisième Écran" 
          component={ThirdScreen} 
          options={{ 
            title: 'Troisième Écran',
            drawerIcon: ({ size }) => (
              <Image source={require('./assets/third.png')} style={{ width: size, height: size }} />
            ),
          }} 
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
