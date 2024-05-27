import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantMenu from "../components/RestaurantMenu";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="orange" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantMenu
          id={123}
          imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Chicken Chicken"
          rating={4.5}
          genre="South African"
          address="23 Pretoria Road"
          short_description="eat eat tea your chicken , just eat the chicken"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantMenu
          id={123}
          imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Chicken Chicken"
          rating={4.5}
          genre="South African"
          address="23 Pretoria Road"
          short_description="eat eat tea your chicken , just eat the chicken"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantMenu
          id={123}
          imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Chicken Chicken"
          rating={4.5}
          genre="South African"
          address="23 Pretoria Road"
          short_description="eat eat tea your chicken , just eat the chicken"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
