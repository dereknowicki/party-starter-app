import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class SignupForm extends React.Component {
    render() {
        return (
            <View style={styles.signupForm}>
                <Text style = {styles.header}>Sign Up Page</Text>

                <View style = {styles.CircleShapeView}>

                </View>
                <Text style = {styles.logoName}>Party Starter</Text>

                <TextInput style = {styles.textinput} placeholder = "Full Name" />

                <TextInput style = {styles.textinput} placeholder = "Email Address" />

                <TextInput style = {styles.textinput} placeholder = "Password" 
                secureTextEntry={true} />

                <TextInput style = {styles.textinput} placeholder = "Location" />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Submit</Text>
                </TouchableOpacity>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    signupForm: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        color: '#545454',
        paddingBottom: 10,
        paddingRight: 165,
        marginBottom: 50,
        padding: 10,
        backgroundColor: '#0000b2',
        marginTop: -20,
    },
    CircleShapeView: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#ff4040',
    },  
    logoName: {
        fontSize: 29,
        color: '#565353',
        height: 70,
        textAlign: 'center',
        marginTop: 10,
    },
    textinput: {
        fontSize: 20,
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#545454',
        padding: 10,
        backgroundColor: '#808080',
        marginTop: 10,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#808080',
        marginTop: 30,
        marginLeft: 90,
        marginRight: 90,
    },
    btntext: {
        color: '#545454',
        fontWeight: 'bold',
    }
});
