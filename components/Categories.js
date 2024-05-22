import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://chickenlicken.co.za/assets/uploads/product_categories/nav/11_soulsister-specials.png"
        title="Buns"
      />
      <CategoryCard
        imgUrl="https://specialsza.co.za/wp-content/uploads/2021/12/a3-1.jpg"
        title="Chicken"
      />
      <CategoryCard
        imgUrl="https://chickenlicken.co.za/assets/uploads/product_categories/nav/1_just-hotwings.png"
        title="Sides"
      />
      <CategoryCard
        imgUrl="https://chickenlicken.co.za/assets/uploads/product_categories/nav/11_soulsister-specials.png"
        title="Buns"
      />
      <CategoryCard
        imgUrl="https://specialsza.co.za/wp-content/uploads/2021/12/a3-1.jpg"
        title="Chicken"
      />
      <CategoryCard
        imgUrl="https://chickenlicken.co.za/assets/uploads/product_categories/nav/1_just-hotwings.png"
        title="Sides"
      />
    </ScrollView>
  );
};

export default Categories;
