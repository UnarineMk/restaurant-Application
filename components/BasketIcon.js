import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-slate-400 p-4 rounded-lg flex-row items-center space-x-1" onPress={() => navigation.navigate("Basket")}>
        <Text className="text-slate-300 font-extrabold text-lg bg-slate-500 py-1 px-2">{items.length}</Text>
        <Text className="font-bold text-lg flex-1 text-center text-slate-300">View Basket</Text>
        <Text className="text-lg text-slate-300 font-extrabold">
          <Currency quantity={basketTotal} currency="ZAR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
