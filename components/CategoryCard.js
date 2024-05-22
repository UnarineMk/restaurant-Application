import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded bg-black"
      />
      <Text className="absolute font-bold text-gray-500">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
