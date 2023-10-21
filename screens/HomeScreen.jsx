/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Button, Image} from 'react-native';
import KahitANo from '../images/venom.jpg';

function HomeScreen({navigation}) {

  const name = 'Juan dela Cruz';
  const address = 'Philippines';
  const favoriteNumber = 1;

  return (
    <View>
      <Image source={KahitANo} style={{ width: '100', height: 200 }} />
      <Text style={{ fontSize: 20, color:'#43A047', marginLeft: 10, marginTop: 20}}>
       Welcome to my React Native App
      </Text>
      <Text style={{ fontSize: 15, color:'#3F51B5', marginLeft: 10, marginTop: 10}}>
       My Name: {name}
      </Text>

      <View style={{marginRight: 20, marginLeft: 20, marginTop:20, gap: 10}}>
        <Button title="Component Lesson Screen" onPress={() => navigation.navigate('LessonComponent')}/>
        <Button title="Styling Lesson Screen" onPress={() => navigation.navigate('LessonStyling')}/>
        <Button title="State Lesson Screen" onPress={() => navigation.navigate('LessonState')}/>
        <Button title="State 2 Lesson Screen" onPress={() => navigation.navigate('LessonState2')}/>
        <Button title="Scroll Lesson Screen" onPress={() => navigation.navigate('LessonScrollView')}/>
        <Button title="Database Lesson Screen" onPress={() => navigation.navigate('LessonDatabase')}/>
      </View>
    </View>
  );
}

export default HomeScreen;
