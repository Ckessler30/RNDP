import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';

export default function App() {
 
  return (
    // View => UIView IOS
    <SafeAreaView style={styles.container}>
      <Text>Lets get this money!!</Text>
      <TouchableWithoutFeedback>
        {/* <Image source={{
          width: 200,
          height: 300,
          uri: ""
        }}>

        </Image> */}

      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
