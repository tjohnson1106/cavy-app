import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };
  render() {
    return (
      <View>
        <Text style={styles.greeting}>
          <Text>{"Hello again. Welcome back."}</Text>
        </Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput style={styles.input} autoCapitalize="none"></TextInput>
          </View>

          <View
            style={{
              marginTop: 32
            }}
          >
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "500"
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              color: "#414959",
              fontSize: 13
            }}
          >
            New Here?
            <Text
              style={{
                color: "#E94464",
                fontWeight: "500"
              }}
            >
              Sign Up!
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A"
  },
  form: {
    marginBottom: 49,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 49,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoginScreen;
