import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ meals, navigation }) => {
  //   console.log(meals);
  const RenderMealItem = (itemData) => {
    console.log(itemData.item.title);
    return (
      <View>
        <MealItem
          title={itemData.item.title}
          image={itemData.item.imageUrl}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          onSelectMeal={() => {
            navigation.navigate("MealDetail", { mealId: itemData.item.id });
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={meals}
        renderItem={RenderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

export default MealList;
