import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";




import colors from '../config/colors'

export default function ViewImageScreen(props) {
    return (
      <View style={styles.container}>
          <View style={styles.topContainer}>
            <TouchableHighlight
            onPress={() => props.navigation.goBack()}
            >
            <Icon name="chevron-circle-left" size={50} color={colors.primary} />
            </TouchableHighlight>
            <TouchableHighlight
            onPress={() => console.log("Delete")}
            >
            <Icon name="minus-circle" size={50} color={colors.secondary} />
            </TouchableHighlight>
          </View>
        <View style={styles.deleteIcon}></View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: "https://cdn.discordapp.com/attachments/908486747506221059/933031221271879730/cPp7VT.png",
          }}
        ></Image>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topContainer: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    image: {
      width: "100%",
      height: "80%",
      marginTop: 8
    },
});

