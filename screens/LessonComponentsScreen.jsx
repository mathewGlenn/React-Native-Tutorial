import React from 'react';
import { Text, View } from "react-native";
import MyReusableText from "../components/MyReusableText";

function LessonComponentScreen() {
  return (
    <View style={{ padding: 20 }}>
      {/* // This Text used inline-style. Notice that if you use inline-style you use double curly braces {{}} */}
      <Text style={{ fontSize: 12 }}>
        Note: Review the code of LessonComponentsScreen.jsx to learn about using
        reusable components and props in React Native.
      </Text>

      <View style={{ marginTop: 20, gap: 10}}>
        <MyReusableText text="Hello, World" />
        <MyReusableText text="Hello, World" kulay="blue"/>
        <MyReusableText text="Hello, World" kulay="green"/>
      </View>
    </View>
  );
}

export default LessonComponentScreen;
