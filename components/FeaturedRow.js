import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantMenu from "../components/RestaurantMenu";
import sanityClient from "../sanity";

const FeaturedRow = ({ title, description, id }) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type =="featured" && _id == $id] {
      ...,
      restaurantMenu[]->{
      ...,
      dishes[]->,
      type->{
        name
      }
  },
  
  }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurantMenu(data?.restaurantMenu);
      });
  }, [id]);

  // console.log(restaurantMenu);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="gray" />
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
        {restaurantMenu?.map((restaurant) => (
          <RestaurantMenu
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
