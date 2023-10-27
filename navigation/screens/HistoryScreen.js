import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Button, TouchableHighlight } from 'react-native';
import storage from "../Storage";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const containerHeight = '100%'

export default function HistoryScreen({navigation}) {
  const [history, setHistory] = useState([]);
  const [Count, SetCount] = useState(0)

  function Update() {
    storage.getAllDataForKey('history-13').then(history => {
      setHistory(history);
    });
    SetCount(Count)
  }

  useEffect(() => {
    storage.getAllDataForKey('history-13').then(history => {
      setHistory(history);
    });
    SetCount(Count)
  }, []);
  return (
    <View style={{backgroundColor: '#111', height: containerHeight, display: 'flex', flexDirection: 'column', padding: 20, gap: 10}}>
      <TouchableHighlight onPress={() => Update()} style={{backgroundColor: '#333', borderRadius: 15, width: 40, height: 40, alignSelf: 'flex-end', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <MaterialCommunityIcons name="reload" size={30}/>
      </TouchableHighlight>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <View style={{backgroundColor: '#222', borderRadius: 20, padding: 20, marginVertical: 4}}>
            <Text style={{fontSize: 16}}>request time: {new Date(Number(item.split('|')[0])).toLocaleString()}</Text>
            <Text style={{fontSize: 16}}>respone: {item.split('|')[1]}</Text>
          </View>
        )}
      />
    </View>
  );
}