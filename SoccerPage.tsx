import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MainView from './MainView';

const SoccerPage = () => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
    };
    return (
  
      
      <View style={{backgroundColor:"#fff", flex:1}}>
      <SafeAreaView style={backgroundStyle}>
        
      </SafeAreaView>
      <View><Text>Hello</Text></View>
     
      </View>
    );
  }
  
  export default SoccerPage;