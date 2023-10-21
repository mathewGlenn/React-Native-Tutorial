/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import CheckIcon from "../images/check-mark.png";

// This is a StyleSheet style. You can use this when you want to style multiple view elements.
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  buttonStyle: {
    backgroundColor: 'red',
  },
  checkIconStyle: {
    width: 50,
    height: 50,
  },
});
function LessonStylingScreen() {
  return (
    <View style={{ padding: 20, height: '100%' }}>
      {/* // This Text used inline-style. Notice that if you use inline-style you use double curly braces {{}} */}
      <Text style={{ fontSize: 12, marginBottom: 20 }}>
        Note: Review the code of LessonStyling.jsx to learn about Styling in React
      </Text>

      {/* // This Text used StyleSheet. Notice that if you use StyleSheet you use {} */}
      <Text style={styles.textStyle}>Hello, World</Text>
      <Text style={styles.textStyle}>Hello, Philippines</Text>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.textStyle}>Vertical Direction</Text>

        {/* By default, the direction of your elements is vertical */}
        <View>
          <Image style={styles.checkIconStyle} source={CheckIcon} />
          <Image style={styles.checkIconStyle} source={CheckIcon} />
          <Image style={styles.checkIconStyle} source={CheckIcon} />
        </View>

        <Text style={[styles.textStyle, { marginTop: 20 }]}>
          Horizontal Direction
        </Text>
        {/* You can use flexDirection: 'row' to make your items horizontal */}
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.checkIconStyle} source={CheckIcon} />
          <Image style={styles.checkIconStyle} source={CheckIcon} />
          <Image style={styles.checkIconStyle} source={CheckIcon} />
        </View>
      </View>

      {/* You can use position: 'absolute' to make your view in fixed position. You can use bottom:0 to fixed to bottom,
      top:0 to fixed to top, left: 0 to fixed to left, right:0 to fixed to right. You can also use combination like
      bottom:0, left:0 to fixed to bottom-left. */}
      <View style={{ position: 'absolute', flexDirection: 'row', bottom: 0}}>
          <Image style={styles.checkIconStyle} source={CheckIcon} />
          <Image style={styles.checkIconStyle} source={CheckIcon} />
          <Image style={styles.checkIconStyle} source={CheckIcon} />
        </View>
    </View>
  );
}

export default LessonStylingScreen;
