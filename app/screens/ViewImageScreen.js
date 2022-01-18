import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{
                uri: "https://cdn.discordapp.com/attachments/908486747506221059/933031221271879730/cPp7VT.png",
              }}
            ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

