import React from 'react';
import { Image, View, StyleSheet, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';

type WelcomeScreenNavigationProp = StackNavigationProp<any, 'Welcome'>; 
interface WelcomeProps {
  navigation: WelcomeScreenNavigationProp;
}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require("../../../assets/ship1.png")} 
          style={styles.image}
        />
        <Image
          source={require("../../../assets/ship1.png")} 
          style={styles1.image}
        />
        <Image
          source={require("../../../assets/ship1.png")}
          style={styles2.image}
        />
        <Image
          source={require("../../../assets/ship1.png")} 
          style={styles3.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Let's Get</Text>
        <Text style={styles.subtitleText}>Started</Text>
      </View>

      
      <View style={styles.buttonContainer}>
        <Button
          title="Play Now (Register)"
          onPress={() => navigation.navigate("Register")}
          style={{ width: '100%', backgroundColor: COLORS.white }}
        />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginPressableText}>Login</Text>
        </Pressable>
      </View>
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: 650, 
        left: 0,
        right: 0,
        paddingHorizontal: 5,
        
      },
    loginContainer: {
        flexDirection: "row",
        marginTop: 12,
        top: -150,
        justifyContent: "center",
      },
      loginText: {
        fontSize: 16,
        color: COLORS.white,
      },
      loginPressableText: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: "bold",
        marginLeft: 4,
      },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 20,
    position: "absolute",
    top: 35,
    left: 70,
    transform: [
      { translateX: 20 },
      { translateY: 50 },
      { rotate: "-10deg" },
    ],
  },
  textContainer: {
    paddingHorizontal: 22,
    position: 'absolute',
    top: 450, 
    width: '100%',
  },
  titleText: {
    fontSize: 50,
    fontWeight: "800", 
    color: COLORS.white,
  },
  subtitleText: {
    fontSize: 46,
    fontWeight: "800", 
    color: COLORS.white,
  },
});

const styles1 = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    left: 190,
    top: -10,
    transform: [
      { translateX: 50 },
      { translateY: 50 },
      { rotate: "-5deg" },
    ],
  },
});

const styles2 = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
    position: "absolute",
    left: 10,
    top: 150,
    transform: [
      { translateX: 50 },
      { translateY: 50 },
      { rotate: "10deg" },
    ],
  },
});

const styles3 = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    left: 150,
    top: 130,
    transform: [
      { translateX: 50 },
      { translateY: 50 },
      { rotate: "-15deg" },
    ],
  },
});

export default Welcome;
