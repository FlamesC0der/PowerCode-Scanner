import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import { View } from 'react-native';

// Names
const homeName = "Home"
const historyName = "history"

const Tab = createBottomTabNavigator();

const containerHeight = '100%'

function MainContainer() {
  return (
    <View style={{display: 'flex', flexDirection: 'column', backgroundColor: '#111', height: containerHeight}}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName={homeName}>
          <Tab.Screen name={homeName} component={HomeScreen}/>
          <Tab.Screen name={historyName} component={HistoryScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default MainContainer;