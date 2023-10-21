/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import myImage from '../images/venom.jpg';

function MyProfileScreen() {
  return (
    <View>
      <Image source={myImage} style={{ width: '100%', height: 300 }} />
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '500',
            color: 'black',
            marginTop: 20,
          }}
        >
          Welcome to my Profile Page
        </Text>
        <Text style={{ color: 'black', marginTop: 20 }}>
          Full Name: Glenn Mathew Garma
        </Text>
        <Text style={{ color: 'black' }}>Birthday: December 1, 1999</Text>
        <Text style={{ color: 'black' }}>
          About me: I love learning React Native!
        </Text>
        <TouchableOpacity
          style={{
            padding: 20,
            borderRadius: 15,
            backgroundColor: '#F4511E',
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>My Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 15,
            borderRadius: 15,
            backgroundColor: '#009688',
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>My Hobbies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 15,
            borderRadius: 15,
            backgroundColor: '#1565C0',
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>My Skills</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MyProfileScreen;
