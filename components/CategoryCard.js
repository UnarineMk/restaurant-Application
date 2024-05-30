import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextComponent,
} from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(imgUrl).width(200).url(),
        }}
        className="h-20 w-20 rounded bg-black"
      />
      <Text className="absolute font-bold text-gray-200 pl-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
