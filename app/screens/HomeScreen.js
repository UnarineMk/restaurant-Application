import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassCircleIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";
import sanityClient from "../../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type =="featured"] {
      ...,
      resturantMenu[]->{
      ...,
      dishes[]->,
}

}
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  //console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-stone-300 pt-5">
      {/* Header */}

      <View className="flex-row pb-3 items-center mx-2 space-x-2 px-2">
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/006/735/470/original/vintage-grilled-barbecue-logo-retro-bbq-fire-grill-food-and-restaurant-icon-red-fire-icon-vector.jpg",
          }}
          className="h-7 w-7 bg-transparent p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-500 text-xs">We Deliver</Text>
          <Text className="font-bold text-xl text-gray-700">
            Current Location
            <ChevronDownIcon size={20} color="white" />
          </Text>
        </View>
        <UserIcon size={30} color="white" />
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-100 p-3">
          <MagnifyingGlassCircleIcon color="gray" size={20} />
          <TextInput
            placeholder="Search for you favourite dish!!"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="gray" />
      </View>

      {/* Body  */}

      <ScrollView
        className="bg-slate-200"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Catagories */}

        <Categories />

        {/* Featured */}

        {featuredCategories?.map((category) => (
          <FeaturedRow
            title={category.name}
            description={category.short_description}
            id={category._id}
            key={category._id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
