import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable } from "react-native";

export default function App() {

    // All Functions
    var textInputValue = "Hello from the console"; 
    const handlePress = () => console.log(textInputValue); 
    const handleChangeText = () => console.log(textInputValue); 

  return (
    <View style={styles.container, styles.Button}>

      <textElements style={{backgroundColor: 'lightblue'}}>
      <h1 >Hello World!</h1>
      <h2>First React Native App</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </textElements>

      <StatusBar style="auto" />

      <h3>What would you like to get out of this course?</h3>
      <TextInput style={{width: 500, height: 150, backgroundColor: 'lightgrey' }} placeholder="Initial Text" onChangeText={handleChangeText} />

      <h3>A gif describing how you are feeling about the course:</h3>

      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: "https://c.tenor.com/JY2fRmOGB1UAAAAM/cheer-happy.gif",
        }}
      />

<Button 
title="Submit" 
color="lightblue"
onPress={handlePress}/>

</View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
