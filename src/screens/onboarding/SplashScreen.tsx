import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Svg, { Circle, Text as SvgText } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../src/navigation/AppNavigator";

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    // Splash screen gösterim süresi (3 saniye)
    const timer = setTimeout(() => {
      navigation.navigate("Onboarding1");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Koyu mor gradient arka plan */}
      <View style={styles.background}>
        {/* Wave'ler - Üst üste */}
        <View style={styles.allContainer}>
          <View style={styles.wavesContainer}>
            {/* Wave 1 - En altta */}
            <Image
              source={require("../../../assets/images/Wave1.png")}
              style={[styles.waveImage, styles.wave1]}
              resizeMode="contain"
            />

            {/* Wave 2 - Ortada */}
            <Image
              source={require("../../../assets/images/Wave2.png")}
              style={[styles.waveImage, styles.wave2]}
              resizeMode="contain"
            />

            {/* Wave 3 - En üstte */}
            <Image
              source={require("../../../assets/images/Wave3.png")}
              style={[styles.waveImage, styles.wave3]}
              resizeMode="contain"
            />
          </View>

          {/* Logo container - Gerçek Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/images/Logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Alt loading bar */}
        <View style={styles.loadingContainer}>
          <View style={styles.loadingBar} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#18244c",
    justifyContent: "center",
    alignItems: "center",
  },
  wavesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  wave1: {
    width: width * 0.7,
    height: width * 0.7,
  },
  wave2: {
    width: width * 0.8,
    height: width * 0.8,
  },
  wave3: {
    width: width * 0.88,
    height: width * 0.89,
  },
  waveImage: {
    position: "absolute",
    width: width,
    height: height,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  allContainer: {
    position: "absolute",
    top: -100,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 91,
    height: 73,
    marginBottom: 32,
    marginTop: 16,
  },
  loadingContainer: {
    position: "absolute",
    bottom: 50,
    width: 60,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 2,
    zIndex: 10,
  },
  loadingBar: {
    height: "100%",
    width: "100%",
    backgroundColor: "#5dd3d3",
    borderRadius: 2,
    opacity: 0.8,
  },
});
