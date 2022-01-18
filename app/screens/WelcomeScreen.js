import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors'

function WelcomeScreen(props) {
    return (
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://cdn.discordapp.com/attachments/908486747506221059/933025514615103528/2981587.jpeg",
        }}
      >
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/908486747506221059/933028389114249236/35257.png",
          }}
          style={{width: 150, height: 150, marginTop: 120}}
        ></Image>
        <View style={styles.container}>
          <Button title="Log In" style={styles.loginButton} onPress={() => props.navigation.navigate('Pictures')}>
              {/* <Text>Log In</Text> */}
          </Button>
          <View style={styles.signUp}>
              <Text>Sign Up</Text>
          </View>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    height: "100%",
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10
  },
  signUp: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
});

export default WelcomeScreen;
