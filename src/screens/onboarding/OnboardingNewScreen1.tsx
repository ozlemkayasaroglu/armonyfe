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

type OnboardingScreen1NavigationProp = StackNavigationProp<
  RootStackParamList,
  "Onboarding1"
>;

const { width, height } = Dimensions.get("window");

export default function OnboardingNewScreen1() {
  const navigation = useNavigation<OnboardingScreen1NavigationProp>();

  const handleNext = () => {
    navigation.navigate("Onboarding2");
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
          {/* Wave1 arka plan */}
          <View style={styles.waveContainer}>
            <Image
              source={require("../../../assets/images/Wave1.png")}
              style={styles.waveImage}
              resizeMode="contain"
            />
          </View>

          {/* İçerik */}
          <View style={styles.content}>
            {/* Ana görsel - Description Module */}
            <View style={styles.mainImageContainer}>
              <View style={styles.circularFrame}>
                <Image
                  source={require("../../../assets/images/image23.png")}
                  style={styles.descriptionImage}
                  resizeMode="cover"
                />
              </View>

              {/* Başlık */}
              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  Müzisyen ve{"\n"}müzik grupları
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Sayfa İndikatörü */}
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
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
  waveContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  waveImage: {
    marginTop: 140,
    width: width * 0.82,
    height: width * 4,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 400,
    zIndex: 10,
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
  descriptionImage: {
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
});
