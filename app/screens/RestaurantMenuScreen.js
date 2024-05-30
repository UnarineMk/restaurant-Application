import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const RestaurantMenuScreen = () => {
  const {
    params: {
      key,
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute;
  return (
    <View>
      <Text>RestaurantMenuScreen</Text>
    </View>
  );
};

export default RestaurantMenuScreen;
