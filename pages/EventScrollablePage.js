import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import SearchHeader from '../components/SearchHeader.js';
import ListItem from '../components/ListItem.js';
import MenuBar from '../components/MenuBar.js';

const App = ()  => {
  //Dummy data for testing purposes, will pull from backend
  const[items] = useState([
    {id: 1, title: 'Event #1', location: 'Location #1', dateTime: 'Date/ time: ', numAttendees: '1 Attendee', creator: 'Creator #1'},
    {id: 2, title: 'Event #2', location: 'Location #2', dateTime: 'Date/ time: ', numAttendees: '2 Attendees', creator: 'Creator #6'},
    {id: 3, title: 'Event #3', location: 'Location #3', dateTime: 'Date/ time: ', numAttendees: '3 Attendees', creator: 'Creator #5'},
    {id: 4, title: 'Event #4', location: 'Location #4', dateTime: 'Date/ time: ', numAttendees: '122 Attendees', creator: 'Creator #4'},
    {id: 5, title: 'Event #5', location: 'Location #2', dateTime: 'Date/ time: ', numAttendees: '2 Attendees', creator: 'Creator #3'},
    {id: 6, title: 'Event #2', location: 'Location #2', dateTime: 'Date/ time: ', numAttendees: '2 Attendees', creator: 'Creator #2'},
  ]);

  return (
    <View style={styles.container}>
      <SearchHeader/>
      <FlatList
        data = {items}
        renderItem={({item}) => <ListItem item = {item} />}
      />
      <MenuBar style = {{paddingBottom: 10,}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

});

export default App;
