/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useState } from "react";
import { Text, View, Button } from "react-native";

function LessonStateScreen() {
  // Take note: [numOfCakes, setNumOfCakes]. In the first key numOfCakes,
  // it is the storage of the data, and the second key setNumOfCakes, it is responsible for changing the value of the data.
  const [numOfCakes, setNumOfCakes] = useState(0);
  const [numOfBread, setNumOfBread] = useState(0);
  return (
    <View style={{padding: 20}}>
      <Text style={{ fontSize: 12 }}>
        Note: Review the code of this screen to learn about State in React
      </Text>

      <Text style={{marginTop: 20, marginBottom: 10}}>Number of cakes: {numOfCakes}</Text>
      <Button title="Add Cake" onPress={() => setNumOfCakes(numOfCakes + 1)} />

      <Text style={{marginTop: 20, marginBottom: 10}}>Number of breads: {numOfBread}</Text>
      <Button title="Add Bread" onPress={() => setNumOfBread(numOfBread + 1)} />
    </View>
  );
}
export default LessonStateScreen;
