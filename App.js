import React, { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
     <TextInput
        style = {{height: 100}}
        placeholder = "Type here to translate!"
        onChangeText = {text => setText(text)}
        defaultValue = {text}
    />
    <Text style ={{padding: 10, fontSize: 42}}>
      {text.split(' ').map((word) => word && 'type').join(' ')}
      </Text>
    </View>
  );
}
