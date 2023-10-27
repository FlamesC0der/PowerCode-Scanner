import React from "react";
import { LogBox } from "react-native";
import MainContainer from './navigation/MainContainer';

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <MainContainer/>
  )
}