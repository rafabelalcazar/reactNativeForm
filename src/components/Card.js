import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

export default function Card() {
  return (
    <LinearGradient
      colors={["#7e00e9", "#8700b4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={[styles.section, { justifyContent: "space-between" }]}>
        <View style={styles.userContainer}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/38.jpg" }}
            style={styles.avatar}
          />
          <Text style={{ color: "white", fontSize: 16 }}>Kennet Harrison</Text>
        </View>
        {/* <FontAwesome name='ellipsis-h' size={20} color='white'/> */}
        <Text style={{ color: "white", fontSize: 30, alignSelf: "flex-start" }}>
          ...
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={{ color: "white",fontSize:13,fontStyle:'italic' }}>
          Esta es mi card con información muy importante para los
          desarrolladores
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.section}>
          <FontAwesome name="thumbs-up" color="white" size={30} />
          <Text style={{ color: "white", marginLeft: 10 }}>500 Likes</Text>
        </View>
        <View style={styles.section}>
          <FontAwesome name="comment" color="white" size={30} />
          <Text style={{ color: "white", marginLeft: 10 }}>67 comentarios</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    borderRadius: 15,
    padding: 20
  },
  section: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  }
});
