/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import VenomImage from '../images/venom.jpg';
function LessonScrollViewScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 12 }}>
        Note: Review the code of LessonScrollView.jsx to learn about using
        ScrollView in React Native.
      </Text>

      <Image
        source={VenomImage}
        style={{ width: '100%', height: 200, marginTop: 20 }}
      />

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ScrollView</Text>

        <Text style={{ fontSize: 15 }}>
          If we have long content on our screen, we use Scroll View so that we
          can scroll our screen and see the rest of the content.
        </Text>

        <Text style={{ fontSize: 15, marginTop: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra quam non justo vehicula, id malesuada erat bibendum.Fusce
          rhoncus lacinia ex, a consectetur ex interdum at. Suspendisse potenti.
          Praesent et scelerisque libero. Sed ullamcorper. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam viverra quam non justo
          vehicula, id malesuada erat bibendum.Fusce rhoncus lacinia ex, a
          consectetur ex interdum at. Suspendisse potenti. Praesent et
          scelerisque libero. Sed ullamcorper. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam viverra quam non justo vehicula,
          id malesuada erat bibendum.Fusce rhoncus lacinia ex, a consectetur ex
          interdum at. Suspendisse potenti. Praesent et scelerisque libero. Sed
          ullamcorper
        </Text>

        <Text style={{ fontSize: 15, marginTop: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra quam non justo vehicula, id malesuada erat bibendum.Fusce
          rhoncus lacinia ex, a consectetur ex interdum at. Suspendisse potenti.
          Praesent et scelerisque libero. Sed ullamcorper. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam viverra quam non justo
          vehicula, id malesuada erat bibendum.Fusce rhoncus lacinia ex, a
          consectetur ex interdum at. Suspendisse potenti. Praesent et
          scelerisque libero. Sed ullamcorper. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam viverra quam non justo vehicula,
          id malesuada erat bibendum.Fusce rhoncus lacinia ex, a consectetur ex
          interdum at. Suspendisse potenti. Praesent et scelerisque libero. Sed
          ullamcorper
        </Text>

        <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 50 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra quam non justo vehicula, id malesuada erat bibendum.Fusce
          rhoncus lacinia ex, a consectetur ex interdum at. Suspendisse potenti.
          Praesent et scelerisque libero. Sed ullamcorper. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam viverra quam non justo
          vehicula, id malesuada erat bibendum.Fusce rhoncus lacinia ex, a
          consectetur ex interdum at. Suspendisse potenti. Praesent et
          scelerisque libero. Sed ullamcorper. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam viverra quam non justo vehicula,
          id malesuada erat bibendum.Fusce rhoncus lacinia ex, a consectetur ex
          interdum at. Suspendisse potenti. Praesent et scelerisque libero. Sed
          ullamcorper
        </Text>
      </View>
    </ScrollView>
  );
}

export default LessonScrollViewScreen;
