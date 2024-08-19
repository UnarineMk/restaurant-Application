import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "@/features/restaurantSlice";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "@/features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from "@/sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal)
  const deliveryFee = (basketTotal/15)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className=" border-b border-gray-300 bg-white shadow-xs pb-2">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-500">
              Checkout Food
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute -top-8 right-5"
          >
            <XCircleIcon color="grey" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row  items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/006/735/470/original/vintage-grilled-barbecue-logo-retro-bbq-fire-grill-food-and-restaurant-icon-red-fire-icon-vector.jpg",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Delivery in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-gray-600">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView classname="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-slate-400">{items.length} X</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-lg"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-400">
                <Currency quantity={items[0]?.price} currency="ZAR" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-red-600 text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
<View className="p-5 bg-white mt-5 space-y-4">
  <View className="flex-row justify-between">
    <Text className="text-gray-400 textmd font-semibold">SubTotal</Text>
    <Text className="text-blue-400 textmd font-semibold"><Currency quantity={basketTotal} currency="ZAR"  /></Text>
  </View>
  <View className="flex-row justify-between">
    <Text className="text-gray-400 textmd font-semibold">Delivery Fee</Text>
    <Text className="text-blue-400 textmd font-semibold"><Currency quantity={deliveryFee} currency="ZAR"  /></Text>
  </View>
  <View className="flex-row justify-between">
    <Text className="text-slate-600 textmd font-bold">Order Total Fee</Text>
    <Text className="text-slate-600 textmd font-bold"><Currency quantity={basketTotal+deliveryFee} currency="ZAR"  /></Text>
  </View>

  <TouchableOpacity className="rounded-lg bg-slate-400 p-4">
                <Text
                  className="text-white font-bold text-lg text-center "
              
                >
                  Place Order
                </Text>
              </TouchableOpacity>
</View>

      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
