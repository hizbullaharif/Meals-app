// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// screens
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

// react-Native
import { Platform, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

// icons
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

// v4.0
// const MealsNavigator = creatStackNavigator({
//   Categories: CategoriedScreen,
//   CategoryMeals: {
//     screen: CategoryMealScreen,
//   },
//   MealDetail: MealDetailScreen,
// });
import Colors from "../constants/Colors";

// const Tab = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();

// Tab NAvigator
function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      shifting={true}
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="main"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-restaurant" size={25} color={color} />;
          },
          tabBarColor: Colors.primaryColor,
        }}
        component={CategoriesScreen}
      />
      <Tab.Screen
        name="Favorite Screen"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-star" size={25} color={color} />;
          },
          tabBarColor: Colors.accentColor,
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer
const Drawer = createDrawerNavigator();
function Drawer1() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="mealsNav"
          options={{ headerShown: false }}
          component={MealsNavigater}
        />
        <Drawer.Screen name="categories" component={CategoriesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Stack Navigator
function MealsNavigater() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: "#694fad",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favourite"
                iconName="ios-menu"
                color="black"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
        component={MyTabs}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#694fad",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="CategoryMeal"
        component={CategoryMealScreen}
      />
    </Stack.Navigator>
  );
}

// const MealsFavTabNavigator = {
//   meals: MyTabs,
//   favScreen: FavouritesScreen,
// };

export default Drawer1;
