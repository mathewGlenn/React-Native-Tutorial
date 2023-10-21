/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

function LessonStateScreen2() {
  const [textInputValue, setTextInputValue] = useState('');
  const [name, setName] = useState('');
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 12 }}>
        Note: Review the code of LessonStateScreen2.jsx to learn about using
        State to handle text input in React
      </Text>
      <TextInput
        style={{ backgroundColor: '#ECEFF1', marginTop: 20, marginBottom: 10 }}
        placeholder="Enter your name"
        value={textInputValue}
        onChangeText={(text) => setTextInputValue(text)}
      />
      <Button title="Submit" onPress={() => setName(textInputValue)} />

      <Text style={{ marginTop: 20 }}>My Name is {name}</Text>
    </View>
  );
}
export default LessonStateScreen2;
