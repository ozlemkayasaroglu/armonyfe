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
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../src/navigation/AppNavigator";

type OnboardingScreen2NavigationProp = StackNavigationProp<
  RootStackParamList,
  "Onboarding2"
>;

const { width, height } = Dimensions.get("window");

export default function OnboardingNewScreen2() {
  const navigation = useNavigation<OnboardingScreen2NavigationProp>();

  const handleNext = () => {
    navigation.navigate("Onboarding3");
  };
  const handleLogin = () => {
    console.log("Giriş Yap tıklandı");
  };

  const handleHomepage = () => {
    console.log("Anasayfa tıklandı");
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNext}
      activeOpacity={1}
    >
      <StatusBar style="light" />
      {/* Koyu mor gradient arka plan */}
      <View style={styles.background}>
        {/* Logo üstte */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/Logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.allContainer}>
          <View style={styles.waveContainer}>
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
        </View>

        {/* İçerik */}
        <View style={styles.content}>
          {/* Ana görsel - Description Module */}
          <View style={styles.mainImageContainer}>
            <View style={styles.circularFrame}>
              <Image
                source={require("../../../assets/images/image25.png")}
                style={styles.musicianImage}
                resizeMode="cover"
              />
            </View>

            {/* Başlık */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                Profesyonel müzik{"\n"}hizmetleri
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

      <View style={styles.buttonsContainer}>
        {/* Giriş Yap Butonu */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>Giriş Yap</Text>
        </TouchableOpacity>

        {/* Anasayfa Butonu */}
        <TouchableOpacity
          style={styles.homepageButton}
          onPress={handleHomepage}
          activeOpacity={0.8}
        >
          <Text style={styles.homepageButtonText}>Anasayfa</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 400,
    zIndex: 10,
  },
  waveContainer: {
    position: "absolute",
    top: 150,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  waveImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  wave1: {
    width: width * 0.78,
    height: width * 2,
  },
  wave2: {
    width: width * 0.9,
    height: width * 2,
  },
  wave3: {
    width: width * 0.95,
    height: width * 2,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 20,
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
  },
  logoImage: {
    width: 91,
    height: 73,
    alignSelf: "center",
  },
  logoText: {
    color: "#5dd3d3",
    fontSize: 16,
    fontWeight: "300",
  },
  mainImageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  circularFrame: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "rgba(93, 211, 211, 0.3)",
    shadowColor: "#5dd3d3",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  musicianImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 14,
    marginBottom: 20,
  },

  allContainer: {
    position: "absolute",
    top: -300,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
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
  buttonsContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 20,
  },
  loginButton: {
    width: 343,
    height: 48,
    backgroundColor: "#7B61FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  homepageButton: {
    width: 343,
    height: 48,
    backgroundColor: "transparent",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  homepageButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
});
