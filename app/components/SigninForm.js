import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class SigninForm extends React.Component {
    render() {
        return (
            <View style={styles.signinForm}>
                <View style = {styles.CircleShapeView}>
                <View style = {styles.innerCircleLogoShapeView}></View>
                <Text style= {styles.logoTextInput}>Logo</Text>
                </View>

                <Text style = {styles.logoName}>Party Starter</Text>

                <TouchableOpacity style={styles.signInButton}>
                    <View style = {styles.RectangleShapeView}></View>
                    <View style = {styles.leftSquareShapeView}></View>
                    <View style = {styles.rightSquareShapeView}></View>
                    <View style = {styles.innerCircleShapeView}></View>
                    <View style = {styles.innerHeadCircleShapeView}></View>
                    <View style = {styles.innerHalfCircleShapeView}></View>
                    <TextInput style = {styles.textinput} placeholder = "Full Name" />

                    <TextInput style = {styles.textinput} placeholder = "Password" 
                        secureTextEntry={true} />
                    <Text style={styles.signInBtntext}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    signinForm: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CircleShapeView: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#ff4040',
    },  
    innerCircleLogoShapeView: {
        width: 70,
        height: 70,
        borderRadius: 70/2,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginVertical: 15,
    },
    logoTextInput: {
        fontSize: 20,
        color: '#545454',
        marginVertical: -65,
        marginHorizontal: 27,
    },
    logoName: {
        fontSize: 29,
        color: '#565353',
        height: 60,
        textAlign: 'center',
        marginTop: 10,
    },
    RectangleShapeView: {
        width: 330,
        height: 80,
        backgroundColor: '#88929c',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginVertical: -60,
    },
    leftSquareShapeView: {
        width: 30,
        height: 30,
        backgroundColor: '#aec6cf',
        marginHorizontal: 15,
        marginVertical: 5,
    },
    rightSquareShapeView: {
        width: 30,
        height: 30,
        backgroundColor: '#aec6cf',
        marginHorizontal: 280,
        marginVertical: -35,
    },
    innerCircleShapeView: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        backgroundColor: '#fff',
        marginHorizontal: 138,
        marginVertical: 30,
    },
    innerHeadCircleShapeView: {
        width: 15,
        height: 15,
        borderRadius: 15/2,
        backgroundColor: '#AFAFAF',
        marginHorizontal: 161,
        marginVertical: -80,
    },
    innerHalfCircleShapeView: {
        width: 30,
        height: 15,
        borderRadius: 30/2,
        backgroundColor: '#AFAFAF',
        marginHorizontal: 154,
        marginVertical: 84,
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 60,
        borderTopEndRadius: 180,
        borderTopStartRadius: 180,
    },
    signInButton: {
        backgroundColor: '#aec6cf',
        width: 330,
        height: 450,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingVertical: 60,      
    },
    signInBtntext: {
        fontSize: 26,
        color: '#545454',
        alignSelf: 'center',
        marginTop: 90,
        paddingVertical: 10,
        paddingBottom: 20,
    },
    textinput: {
        fontSize: 20,
        alignSelf: 'stretch',
        height: 40,
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: -10,
        color: '#545454',
        padding: 10,
        paddingTop: 10,
        backgroundColor: '#fff',
        
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#aec6cf',
        marginTop: 20,
        marginLeft: 70,
        marginRight: 70,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    btntext: {
        color: '#545454',
        fontWeight: 'bold',
    }
});