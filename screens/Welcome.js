import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../const/color";
import Button from "../components/Button/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={styles.container}
    >
      <View>
        <Image
          source={require("../assets/image/hero1.jpg")}
          style={styles.hero1}
        />
        <Image
          source={require("../assets/image/hero3.jpg")}
          style={styles.hero3}
        />
        <Image
          source={require("../assets/image/hero3.jpg")}
          style={styles.hero3_1}
        />
        <Image
          source={require("../assets/image/hero2.jpg")}
          style={styles.hero2}
        />

        {/* content */}
        <View style={styles.content}>
          <Text style={styles.title}>Let's Get</Text>
          <Text style={styles.title2}>Started</Text>

          <View style={{ marginVertical: 22 }}>
            <Text style={styles.subtitle}>
              Connect with each other with chatting
            </Text>
            <Text style={styles.subtitle2}>
              Calling, Enjoy Safe and private texting
            </Text>
          </View>
          <Button
            title="Join Now"
            style={styles.btn}
            onPress={() => navigation.navigate("Singup")}
          />

          <View style={styles.login}>
            <Text style={styles.login_txt}>Already have an a account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.login_link}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 30,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  hero3: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: -5,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },
  hero3_1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 180,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "15deg" }],
  },
  hero2: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 150,
    left: 120,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  // content
  content: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 450,
    width: "100%",
  },
  title: {
    fontSize: 50,
    fontWeight: "800",
    color: COLORS.white,
  },
  title2: {
    fontSize: 46,
    fontWeight: "800",
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
    marginVertical: 4,
  },
  subtitle2: {
    fontSize: 16,
    color: COLORS.white,
  },
  btn: {
    marginTop: 22,
    width: "100%",
  },
  login: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  login_txt: {
    fontSize: 16,
    color: COLORS.white,
  },
  login_link: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "bold",
    marginLeft: 4,
  },
});
