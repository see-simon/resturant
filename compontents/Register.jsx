import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Lottie from "lottie-react-native";

const Register = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.lottie}>
        <Lottie
          source={require("./lottie/101191-submit-application-successfully.json")}
          autoPlay
          loop
          style={{ height: 300, width: 200 }}
        />
      </View>
      <View style={style.inputContainer}>
        <TextInput style={style.input} sty placeholder="Enter name"></TextInput>
        <TextInput style={style.input} placeholder="Enter surname"></TextInput>
        <TextInput
          style={style.input}
          sty
          placeholder="Enter email"
        ></TextInput>
        <TextInput style={style.input} placeholder="Enter password"></TextInput>
        <TextInput
          style={style.input}
          sty
          placeholder="confirm password"
        ></TextInput>
      </View>

      <View style={style.Buttons}>
        <TouchableOpacity>
          <View style={style.getButton}>
            <Text style={{ color: "red" }}>register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    backgroundColor: "white",
    // width:"100%"
  },
  lottie:{
    //backgroundColor:"red",

  },
  input: {
    borderColor: "red",
    borderWidth: 2,
    // color:"red",
    height: "15%",
    width: "80%",
    textAlign: "center",
    borderRadius: 20,
    // marginTop: "30%",
  },

  inputContainer: {
    backgroundColor:"#facaca",
    width: "80%",
    height: "40%",
    alignItems: "center",
    textAlign: "left",
    // marginTop: "10%",
    justifyContent: "space-around",

    borderWidth:1,
    borderRadius: 20,
  },

  Buttons: {
    width: "90%",
    height: "30%",
    alignItems: "center",
   // backgroundColor:"black",
    justifyContent:"center"
    
  },

  getButton: {
    borderColor: "red",
    alignItems: "center",

    justifyContent: "center",
    // backgroundColor: "black",

    borderWidth: 2,
    paddingLeft: 20,
    paddingEnd: 20,

    // marginTop: "50%",
    borderRadius: 30,
    height: "50%",
    width: "100%",
  },
});

export default Register;
