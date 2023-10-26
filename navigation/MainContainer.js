import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Screens
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';

// Names
const homeName = "scan"
const historyName = "history"


const Tab = createBottomTabNavigator();

const containerHeight = '100%'

function MainContainer() {
  return (
    <View style={{display: 'flex', flexDirection: 'column', backgroundColor: '#111', height: containerHeight}}>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName={homeName}
          screenOptions={{
            tabBarStyle: {backgroundColor: '#262626'},
            headerStyle: {backgroundColor: '#262626'},
            headerTitleStyle: {color: '#fff', fontSize: 20}
          }}
        >
          <Tab.Screen 
            name={homeName} 
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name={historyName} 
            component={HistoryScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="history" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default MainContainer;