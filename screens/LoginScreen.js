import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

export default class LoginScreen extends Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center", fontWeight: 800, fontSize: 20 }}> I will be back </Text>
                <View>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                    <Text >Email:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                </View>
                <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                    <Text>Password:</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>
                
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 700 }}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                   style={{textAlign:"center"}}
                   onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text>
                        Not yet registered?
                        <Text style={{color:"#FE0000", fontWeight:600}}> Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    error: {
        color: "#FF3300",
        textAlign:"center"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#FF3399",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }

})
