import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventPage from './app/components/EventPage.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <EventPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});