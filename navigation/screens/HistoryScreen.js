import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import storage from "../Storage";

const containerHeight = '100%'

export default function HistoryScreen({navigation}) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    storage.getAllDataForKey('history-13').then(history => {
      setHistory(history);
    });
  }, []);
  return (
    <View style={{backgroundColor: '#111', height: containerHeight, display: 'flex', flexDirection: 'column', padding: 20, gap: 10}}>
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