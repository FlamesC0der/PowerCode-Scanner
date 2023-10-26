import * as React from 'react';
import { View, Text } from 'react-native';

const containerHeight = '100%'

export default function HomeScreen({navigation}) {
  return (
    <View style={{backgroundColor: '#111', height: containerHeight}}>
      <Text>history</Text>
    </View>
  )
}