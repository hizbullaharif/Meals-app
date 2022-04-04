import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const categoryGridTile = ({ onSelect, title, color }) => {
  let Touchablecmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchablecmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <Touchablecmp onPress={onSelect} style={{ flex: 1 }}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Touchablecmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },

    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-Bold",
    fontSize: 18,
  },
});
export default categoryGridTile;
