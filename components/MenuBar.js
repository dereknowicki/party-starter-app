import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MenuBar = (props)  => {
  const menu = () => {

  };

  return (
    <View style={styles.bar}>
      <Text style = {styles.txt}>Menu</Text>
      <TouchableOpacity style = {styles.icn} onTap = {menu}>
        <FontAwesome name="bars" size={36} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#01426a",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    height: 50,

    alignItems: 'center',
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  txt:{
    color: 'white',
    fontSize: 26,
    flex: 5,
  },
  icn:{
    paddingLeft: 150,
    flex: 1,
  },
});

export default MenuBar;
