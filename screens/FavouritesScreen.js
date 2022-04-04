import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import { MEALS } from "../data/meal";
import MealList from "../components/Meallist";

const FavouritesScreen = ({ navigation }) => {
  // navigation.setOptions({ title: "Your Favourites" });
  const meals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2" || meal.id === "m3"
  );

  useEffect(() => {
    navigation.setOptions({
      title: "Your Favourites",
      // tabBarColor: "gray",
      headerShown: false,
    });
  }, []);

  return <MealList meals={meals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouritesScreen;
