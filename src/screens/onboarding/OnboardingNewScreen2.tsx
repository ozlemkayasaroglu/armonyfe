import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../src/navigation/AppNavigator";

type OnboardingScreen2NavigationProp = StackNavigationProp<
  RootStackParamList,
  "Onboarding2"
>;

const { width } = Dimensions.get("window");

export default function OnboardingNewScreen2() {
  const navigation = useNavigation<OnboardingScreen2NavigationProp>();

  const handleNext = () => {
    navigation.navigate("Onboarding3");
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNext}
      activeOpacity={1}
    >
      <StatusBar style="light" />
      {/* Koyu mor arka plan */}
      <View style={styles.background}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/Logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        {/* Wave görselleri */}
        <View style={styles.waveContainer}>
          <Image
            source={require("../../../assets/images/Wave1.png")}
            style={styles.wave1}
            resizeMode="contain"
          />
          <Image
            source={require("../../../assets/images/Wave2.png")}
            style={[styles.waveImage, styles.wave2]}
            resizeMode="contain"
          />
        </View>
        {/* Ana içerik */}
        <View style={styles.content}>
          <View style={styles.mainImageContainer}>
            <View>
              <Image
                source={require("../../../assets/images/image24.png")}
                style={styles.musicianImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                Müzik eğitimleri ve{"\n"}etkinlik hizmetleri
              </Text>
            </View>
          </View>
        </View>
        {/* Sayfa İndikatörü */}
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
      </View>
    </TouchableOpacity>
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
  logoContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 20,
  },
  logoImage: {
    width: 91,
    height: 73,
    alignSelf: "center",
  },
  waveContainer: {
    position: "absolute",
    top: -150,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  waveImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  wave1: {
    width: width * 0.84,
    height: width * 2,
  },
  wave2: {
    width: width * 0.89,
    height: width * 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  mainImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: -130,
  },

  musicianImage: {
    width: 183,
    height: 183,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
  },
  pagination: {
    position: "absolute",
    bottom: 270,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#5dd3d3",
    width: 8,
    height: 8,
  },
});
