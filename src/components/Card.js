import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Card() {
  return (
    <LinearGradient 
    colors={["#7e00e9", "#8700b4"]}
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    style={{
        height:200,
        width:"100%",
        borderRadius: 15,
        padding: 20,
    }}
    >
      <Text>Card ta ta at sdouf oasdgf lasjd gflajsd f askdjfsf</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {}
});
