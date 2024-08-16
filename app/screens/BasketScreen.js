import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { useNavigation } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '@/features/restaurantSlice';
import { selectBasketItems } from '@/features/basketSlice';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();

    useMemo(()=>{

    },[])
  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen