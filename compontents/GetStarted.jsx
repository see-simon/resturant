import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { StyleSheet } from "react-native";

import Lottie from "lottie-react-native";

//import Lottie from 'lottie-react-native';

const GetStared = ({ navigation }) => {
  return (
    <>
      <View style={style.container}>
        <View style={style.topContainer}>
          <View style={style.lottie}>
            <Lottie
              source={require("./lottie/82624-foodies.json")}
              autoPlay
              loop
              style={{ height: "100%", width: "100%" }}
            />
          </View>
        </View>

        <View style={style.buttons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login", { name: "Login" })}
          >
            <View style={style.getButton}>
              <Text style={{ color: "red" }}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Register", { name: "Register" })
            }
          >
            <View style={style.getButton2}>
              <Text style={{ color: "red" }}>Create account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    backgroundColor: "white",
  },
  lottie: {
    marginTop: "10%",
    height: "65%",
    //backgroundColor: "red",
    alignItems: "center",
    width: "100%",
  },
  topContainer: {
    height: "50%",
    backgroundColor: "#fcd2d2",
    width: "100%",
    borderBottomEndRadius: 30,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    marginBottom:50,
  },

  getButton2: {
    borderColor: "red",
    alignItems: "center",
    //

    justifyContent: "center",
    // backgroundColor: "black",
    borderWidth: 1,
    paddingLeft: 10,
    paddingEnd: 10,

    // marginTop: "5%",
   
    borderRadius: 30,
    height: "40%",
    width: "100%",
  },

  getButton: {
    borderColor: "red",
    alignItems: "center",

    justifyContent: "center",
    // backgroundColor: "black",

    borderWidth: 1,
    paddingLeft: "10%",
    paddingRight: "10%",
    // paddingEnd: "30%",

    marginTop: "10%",
    borderRadius: 30,
    height: "40%",
    width: "100%",
  },
  buttons:{
    //backgroundColor:"yellow",
    width:"85%",
    height: "25%",
    alignItems:"center",
    justifyContent:"center",

    borderColor:"red",
    borderWidth:2,
    borderRadius:20,
    backgroundColor: "#fcd2d2",
    

  }
});

export default GetStared;
