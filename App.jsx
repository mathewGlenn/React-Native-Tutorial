/* eslint-disable prettier/prettier */
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LessonStateScreen from './screens/LessonStateScreen';
import LessonStateScreen2 from './screens/LessonStateScreen2';
import LessonStylingScreen from './screens/LessonStylingScreen';
import LessonComponentScreen from './screens/LessonComponentsScreen';
import LessonScrollViewScreen from './screens/LessonScrollViewScreen';
import LessonDatabaseScreen from './screens/LessonDatabaseScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LessonState" component={LessonStateScreen} />
        <Stack.Screen name="LessonState2" component={LessonStateScreen2} />
        <Stack.Screen name="LessonStyling" component={LessonStylingScreen} />
        <Stack.Screen name="LessonComponent" component={LessonComponentScreen} />
        <Stack.Screen name="LessonScrollView" component={LessonScrollViewScreen} />
        <Stack.Screen name="LessonDatabase" component={LessonDatabaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
