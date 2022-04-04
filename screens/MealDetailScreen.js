import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/meal";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const MealDetail = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: MealDetail.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favourite"
            iconName="ios-star"
            color="black"
            onPress={() => {
              console.log("Mark as Favourite");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

export default MealDetailScreen;
