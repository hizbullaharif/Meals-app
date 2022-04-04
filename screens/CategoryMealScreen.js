import React, { useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES } from "../data/category";
import { MEALS } from "../data/meal";

import MealList from "../components/Meallist";

const CategoryMealScreen = ({ route, navigation }) => {
  console.log
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((cat) => categoryId === cat.id);

  const meals = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );

  useEffect(() => {
    navigation.setOptions({ title: selectedCategory.title });
  }, []);

  return <MealList navigation={navigation} meals={meals} />;
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

export default CategoryMealScreen;
