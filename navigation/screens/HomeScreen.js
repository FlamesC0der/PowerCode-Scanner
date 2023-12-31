import React, { useState } from "react";
import { View, Text } from 'react-native';

import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import Sound from "react-native-sound";

import storage from "../Storage";

// import Storage from "react-native-storage";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const storage = new Storage({
//   size: 1000,
//   storageBackend: AsyncStorage,
//   defaultExpires: 1000 * 3600 * 24,
//   enableCache: true,
//   sync: {
//     // 
//   }
// })

// Encode/decode
const codeTable = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8',
  '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-',
  '.', '~', '(', ')', '!', '*', '@', ',', ';'
];
const decBase = codeTable.length;

// function encode(val) {
//   const num = parseInt(val);
//   if (num === 0) {
//       return '0';
//   }
//   let res = '';
//   let temp = num;
//   while (temp > 0) {
//       res = codeTable[temp % decBase] + res;
//       temp = Math.floor(temp / decBase);
//   }
//   return res;
// }

function decode(val) {
  const code = String(val);
  let j = code.length - 1;
  let res = 0;
  for (let i = 0; i < code.length; i++) {
      const num = codeTable.indexOf(code[i]);
      res += num * Math.pow(decBase, j);
      j -= 1;
  }
  return res;
}

// Play Sound func
const playsound = () => {
  const sound = new Sound('scanned1.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load sound', error);
    }
    sound.play()
  })
}

export default function HomeScreen({navigation}) {
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState('')
  
  const HadleQRCodeScanned = ({data}) => {
    console.log(data)
    if (data.includes('DEBUG-CODE:CLEARDB')) {
      storage.clearMapForKey('history-13');
      setText(`DEBUG-CODE: ${data.split(':')[1]}`)
      return
    }
    if (data.includes('http://enip2.ru/c1/')) {
      setScanned(true)
      let res = data.split('/')[4].split(':')
      res = [decode(res[0]), decode(res[1]), decode(res[2])]
      setText(`${res}`)
      playsound()

      // Save data to bd
      storage.save({
        key: 'history-13',
        id: Date.now(),
        data: [Date.now(), res.join(':')].join('|')
      })
    } else {
      setText('Invalid QrCode')
    }
  }


  const containerHeight = '100%'
  const containerWidth = '100%'

  return (
    <View style={{backgroundColor: '#111', height: containerHeight}}>
      <QRCodeScanner
        onRead={HadleQRCodeScanned}
        flashMode={RNCamera.Constants.FlashMode.off}
        reactivate={true}
        reactivateTimeout={5000}
        showMarker={true}
      />
      <View style={{height: 50, width: containerWidth, alignItems: "center", backgroundColor: '#222', borderRadius: 20, marginVertical: 20}}>
        <Text style={{fontSize: 20}}>Data: {text}</Text>
      </View>
    </View>
  )
}