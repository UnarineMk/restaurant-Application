import React from "react";
import { View, Text, ScrollView } from "react-native";

const AllergyScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="text-xl font-bold mb-4 text-center">
          Allergy Information
        </Text>

        <View className="mb-6">
          <Text className="text-lg font-bold mb-2">Common Allergens:</Text>
          <Text className="text-gray-600">
            Please be aware that our dishes may contain or come into contact
            with allergens such as nuts, gluten, dairy, soy, and seafood. If you
            have a severe allergy, please inform your server.
          </Text>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-bold mb-2">Gluten-Free Options:</Text>
          <Text className="text-gray-600">
            We offer a variety of gluten-free dishes. Please ask your server for
            our gluten-free menu or options available today.
          </Text>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-bold mb-2">Vegan Choices:</Text>
          <Text className="text-gray-600">
            Explore our vegan-friendly options, which are free from animal
            products. Ask for our vegan menu or recommendations from your
            server.
          </Text>
        </View>

        <View className="mb-6">
          <Text className="text-lg font-bold mb-2">Cross-Contamination:</Text>
          <Text className="text-gray-600">
            While we take precautions to prevent cross-contamination, our
            kitchen handles various allergens. If you have concerns, please
            discuss them with your server before ordering.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AllergyScreen;
