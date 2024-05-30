import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantMenuScreen from "../screens/RestaurantMenuScreen";
// import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RestaurantMenu" component={RestaurantMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
