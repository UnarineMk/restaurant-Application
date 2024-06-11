import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { urlFor } from "@/sanity";
import DishRow from "../../components/DishRow";

const RestaurantMenuScreen = () => {
  const {
    params: {
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
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-slate-500 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className=" absolute top-14 left-5 bg-slate-400 rounded-full p-2"
        >
          <ArrowLeftIcon size={20} color="green" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-gray-700 font-extrabold text-3xl">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> - {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="red" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">Nearby - {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity
          className="flex-row items-center space-x-2 p-4 border-y border-gray-300"
          onPress={() => {
            navigation.navigate("Allergy");
          }}
        >
          <QuestionMarkCircleIcon size={22} opacity={0.3} color="gray" />
          <Text className="font-semibold text-lg text-gray-800 pl-2 flex-1">
            Do you have any allergy?
          </Text>
          <ChevronRightIcon color="green" />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="font-semibold text-lg text-gray-800 pl-2 flex-1 py-2">
          Menu
        </Text>
        {/* DishRow */}

        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            image={dish.image}
            price={dish.price}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantMenuScreen;
