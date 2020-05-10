import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchHeader = (props)  => {
  const[text, setText] = useState('');
  const search = () => {

  };

  return (
    <View style={styles.header}>
      <TextInput placeholder = "Search..." style = {styles.input} />
      <TouchableOpacity style = {{paddingTop: 40}} onTap = {search}>
        <FontAwesome name = "search" style = {{alignSelf: 'flex-end'}} size={24} color="darkgray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#01426a",
    flexDirection: 'row',
    height: 80,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  input: {
    maxWidth: 325,
    height: 40,
    alignSelf: 'flex-end',
    flex: 10,
    borderBottomWidth: 1,

  },
});

export default SearchHeader;
