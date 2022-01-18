import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';


const Stack = createNativeStackNavigator()

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' options={{headerShown: 'false'}}>
        <Stack.Screen name='Home' component={WelcomeScreen}/>
        <Stack.Screen name="Pictures" component={ViewImageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




