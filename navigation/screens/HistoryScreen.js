import * as React from 'react';
import { View, Text } from 'react-native';

const containerHeight = '100%'

export default function HomeScreen({navigation}) {
  return (
    <View style={{backgroundColor: '#111', height: containerHeight, display: 'flex', flexDirection: 'column', padding: 20, gap: 10}}>
      <View style={{backgroundColor: '#222', borderRadius: 20, padding: 20}}>
        <Text style={{fontSize: 16}}>request time: 0:11</Text>
        <Text style={{fontSize: 16}}>respone: 1023,123,139719</Text>
      </View>
      <View style={{backgroundColor: '#222', borderRadius: 20, padding: 20}}>
        <Text style={{fontSize: 16}}>request time: time</Text>
        <Text style={{fontSize: 16}}>respone: response</Text>
      </View>
      <View style={{backgroundColor: '#222', borderRadius: 20, padding: 20}}>
        <Text style={{fontSize: 16}}>request time: time</Text>
        <Text style={{fontSize: 16}}>respone: response</Text>
      </View>
    </View>
  )
}