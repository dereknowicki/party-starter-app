import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignupForm from './app/components/SignupForm';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SignupForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#DBD6D6',
        paddingLeft: 60,
        paddingRight: 60,
  },
});
