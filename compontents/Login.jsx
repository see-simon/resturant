import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import eye from "react-native-vector-icons"
import Lottie from "lottie-react-native";
import { Dimensions } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={style.Container}>
      <View style={style.Lottie}>
        <Lottie
          source={require("./lottie/31979-fast-food.json")}
          autoPlay
          loop
          style={{ height: 300, width: 200 }}
        />
      </View>

      <View style={style.inputContainer}>
        <View style={style.inputAndIcon}>
          <Icon name="mail" size={30} style={{color:"red"}}/>
          <TextInput
            style={style.input}
            placeholderTextColor="red"
            placeholder="Enter email"
          ></TextInput>
        </View>

        <View style={style.inputAndIcon}>
          <Icon name="lock" size={30} style={{color:"red"}} />
          <TextInput
            style={style.input}
            placeholderTextColor="red"
            placeholder="Enter password"
          ></TextInput>
        </View>
      </View>

      <View style={style.Buttons}>
        <TouchableOpacity  onPress={() => navigation.navigate("Home", { name: "Home" })}>
          
          <View style={style.getButton}>
            <Text style={{ color: "red" }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inputAndIcon: {
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    //margin:30,
    marginTop: 20,
    height: "30%",
    borderColor: "red",
  },
  Lottie: {
    height: "30%",
  },

  inputContainer: {
    //backgroundColor:"red",
    width: "100%",
    height: "40%",
    // marginTop:50,

    paddingTop: "10%",
    padding: 20,
  },
  input: {
    borderColor: "red",
    // width: Dimensions.get('window').width,
    width: "80%",
    textAlign: "center",
  },

  Container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  Buttons: {
    width: "100%",
    alignItems: "center",
   // backgroundColor: "black",
    height: "20%",
  },

  getButton: {
    borderColor: "red",
    alignItems: "center",

    justifyContent: "center",
     backgroundColor: "white",

    borderWidth: 2,
    paddingLeft: "30%",
    paddingEnd: "30%",

    marginTop: "15%",
    borderRadius: 30,
    height: "40%",
    width: "100%",
  },
});

export default Login;
