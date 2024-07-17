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
    <TouchableOpacity className="relative mr-2 rounded">
      <Image
        source={{
          uri: urlFor(imgUrl).width(200).url(),
        }}
        className="h-20 w-20  bg-black"
      />
      <Text className="absolute text-stone-400 pl-1 bg-gray-800 w-full text-md  opacity-70">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
