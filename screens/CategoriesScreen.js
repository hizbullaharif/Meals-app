import React, { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/category";
import CategoryGridScreen from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
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
  }, [props.navigation]);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridScreen
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeal", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 20,
    height: 150,
  },
});
export default CategoriesScreen;
