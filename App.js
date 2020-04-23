import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SigninForm from './app/components/SigninForm';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SigninForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 60,
        paddingRight: 60,
  },
});
