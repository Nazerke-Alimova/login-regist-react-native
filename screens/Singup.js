import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../const/color";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button/Button";

const Singup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={styles.singup_container}>
      <View style={styles.singup_content}>
        <View style={styles.singup_header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Connect with your friend today!</Text>
        </View>

        <View style={styles.email_content}>
          <Text style={styles.singup_title}>Email address</Text>
          <View style={styles.email_input}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{ width: "100%" }}
            />
          </View>
        </View>

        <View style={styles.mobile_content}>
          <Text style={styles.singup_title}>Mobile Number</Text>
          <View style={styles.mobile_input}>
            <TextInput
              placeholder="+8"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={styles.mobile_input_code}
            />
            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={styles.number_input_num}
            />
          </View>
        </View>

        <View style={styles.password_content}>
          <Text style={styles.password_title}>Password</Text>

          <View style={styles.password_input}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={styles.password_input_txt}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.password_btn}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.check_content}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text>I aggree to the terms and conditions</Text>
        </View>
        <Button title="Sign Up" filled style={styles.singup_btn} />

        <View style={styles.singup_container}>
          <View style={styles.singup_lineLeft} />
          <Text style={styles.singup_title}>Or Sign up with</Text>
          <View style={styles.singup_lineRight} />
        </View>

        <View style={styles.social_content}>
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.social_facebook}
          >
            <Image
              source={require("../assets/image/facebook.png")}
              style={styles.social_facebookImg}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.social_google}
          >
            <Image
              source={require("../assets/image/google.png")}
              style={styles.social_googleImg}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.login_content}>
          <Text style={styles.login_title}>Already have an account</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.login_link}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Singup;

const styles = StyleSheet.create({
  singup_container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  singup_content: {
    flex: 1,
    marginHorizontal: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.black,
  },
  singup_header: {
    marginVertical: 22,
  },
  email_content: {
    marginBottom: 25,
  },
  singup_title: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },
  email_input: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  mobile_content: {
    marginBottom: 12,
  },
  mobile_input: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
  },
  mobile_input_code: {
    width: "12%",
    borderRightWidth: 1,
    borderLeftColor: COLORS.grey,
    height: "100%",
  },
  number_input_num: {
    width: "80%",
  },
  password_content: {
    width: "100%",
  },
  password_title: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },
  password_input: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
    marginBottom: 14,
  },
  password_input_txt: {
    width: "100%",
  },
  password_btn: {
    position: "absolute",
    right: 12,
  },
  check_content: {
    flexDirection: "row",
    marginVertical: 6,
  },
  checkbox: {
    marginRight: 8,
  },
  singup_btn: {
    marginTop: 18,
    marginBottom: 14,
  },
  singup_container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  singup_lineLeft: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  singup_title: {
    fontSize: 14,
  },
  singup_lineRight: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  social_content: {
    flexDirection: "row",
    justifyContent: "center",
  },
  social_facebook: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  social_facebookImg: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  social_google: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  social_googleImg: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  login_content: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  login_title: {
    fontSize: 16,
    color: COLORS.black,
  },
  login_link: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});
