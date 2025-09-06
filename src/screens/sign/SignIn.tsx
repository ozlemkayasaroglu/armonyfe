import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import type { StackNavigationProp } from "@react-navigation/stack";

const { width } = Dimensions.get("window");

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  // add other routes here if needed
};

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignIn"
>;

interface SignInProps {
  navigation: SignInScreenNavigationProp;
}

// Mock SVG components for eye and home icons
const EyeIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 4.5C7 4.5 2.73 7.61 0 12c2.73 4.39 7 7.5 12 7.5s9.27-3.11 12-7.5c-2.73-4.39-7-7.5-12-7.5zm0 13c-3.03 0-5.5-2.47-5.5-5.5S8.97 6.5 12 6.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5zm0-9.5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
      fill="#B6B6B6"
    />
  </Svg>
);

const HomeIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={32} height={32} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#fff" />
  </Svg>
);

export default function SignIn({ navigation }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotError, setForgotError] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const isFormValid = email && password.length >= 6;

  const handleLogin = () => {
    console.log("Giriş Yap butonu tıklandı!");
  };

  const handleSignUpNavigation = () => {
    navigation.navigate("SignUp");
  };

  // Şifremi Unuttum panelini aç
  const handleForgotPasswordOpen = () => {
    setShowForgotPassword(true);
    setForgotEmail("");
    setForgotError("");
    setForgotSuccess(false);
  };
  // Paneli kapat
  const handleForgotPasswordClose = () => {
    setShowForgotPassword(false);
    setForgotEmail("");
    setForgotError("");
    setForgotSuccess(false);
  };
  // Onayla butonu
  const handleForgotPasswordSubmit = () => {
    if (!forgotEmail || !forgotEmail.includes("@")) {
      setForgotError("Lütfen geçerli bir e-posta girin.");
      return;
    }
    setForgotError("");
    setForgotSuccess(true);
    // Burada API isteği yapılabilir
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#12002F" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Üst banner görseli ve home ikonu */}
        <View style={styles.bannerContainer}>
          <Image
            source={require("../../../assets/images/image27.png")}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["#54099B00", "#54099B00", "#35055fCC", "#32015cFF"]}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.bannerOverlay} />
          <TouchableOpacity style={styles.homeIconContainer}>
            <HomeIcon />
          </TouchableOpacity>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerText}>
              Müzigin yeni ağı <Text style={styles.bannerTextBold}>Armony</Text>{" "}
              ailesine {"\n"}
              hoş geldin!
            </Text>
          </View>
        </View>

        {/* Form alanları */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Üye Girişi</Text>

          {/* E-posta alanı */}
          <View>
            {emailFocused || email ? (
              <Text
                style={{
                  color: "#B6B6B6",
                  fontSize: 10,
                  marginLeft: 14,
                  marginBottom: -12,
                }}
              >
                E-posta
              </Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder={
                emailFocused || email ? "Placeholder Text" : "E-posta"
              }
              placeholderTextColor={"#B6B6B6"}
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </View>

          <View style={styles.underline} />

          {/* Şifre alanı - REVİZE */}
          <View>
            {passwordFocused || password ? (
              <Text
                style={{
                  color: "#B6B6B6",
                  fontSize: 10,
                  marginLeft: 14,
                  marginBottom: -12,
                }}
              >
                Şifre
              </Text>
            ) : null}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder={passwordFocused || password ? "*******" : "Şifre"}
                placeholderTextColor={"#B6B6B6"}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                secureTextEntry={!showPassword}
              />
              {!passwordFocused && !password ? (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 14,
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                >
                  <Text style={{ color: "#B6B6B6", fontSize: 16 }}>Şifre</Text>
                  <EyeIcon />
                </View>
              ) : null}
              {passwordFocused || password ? (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{
                    paddingHorizontal: 10,
                  }}
                >
                  <EyeIcon />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>

          <View style={styles.underline} />

          <Text
            style={{ alignSelf: "flex-end", marginTop: -16, marginBottom: 16 }}
          >
            <Text
              style={styles.forgotPasswordText}
              onPress={handleForgotPasswordOpen}
            >
              Şifremi Unuttum
            </Text>
          </Text>

          <Text style={styles.termsText}>
            Kaydolduğunda{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://example.com/terms")}
            >
              Hizmet Şartları'nı
            </Text>{" "}
            ve{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://example.com/cookies")}
            >
              Çerez Kullanımı
            </Text>{" "}
            dahil olmak üzere{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("https://example.com/privacy")}
            >
              Gizlilik Politikası'nı
            </Text>{" "}
            kabul etmiş olursun.
          </Text>

          <TouchableOpacity
            style={[
              styles.signInButton,
              !isFormValid && styles.signInButtonDisabled,
            ]}
            disabled={!isFormValid}
            onPress={handleLogin}
          >
            <Text style={styles.signInButtonText}>Giriş Yap</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUpNavigation}>
            <Text style={styles.loginText}>Üye Ol</Text>
          </TouchableOpacity>
        </View>
        {/* Şifremi Unuttum Paneli */}
        {showForgotPassword && (
          <View style={styles.forgotModalOverlay}>
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={1}
              onPress={handleForgotPasswordClose}
            />
            <View style={styles.forgotModalContainer}>
              <View style={{ alignItems: "center", marginBottom: 12 }}>
                <View style={styles.forgotModalBar} />
              </View>
              <Text style={styles.forgotModalTitle}>Şifremi Unuttum</Text>
              <Text style={styles.forgotModalDesc}>
                Lütfen e-posta adresinizi girin.
              </Text>

              <TextInput
                style={styles.forgotModalInput}
                placeholder="E-posta"
                placeholderTextColor="#B6B6B6"
                value={forgotEmail}
                onChangeText={setForgotEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {forgotError ? (
                <Text style={styles.forgotModalError}>{forgotError}</Text>
              ) : null}
              {forgotSuccess ? (
                <Text style={styles.forgotModalSuccess}>
                  E-posta gönderildi!
                </Text>
              ) : null}
              <TouchableOpacity
                style={styles.forgotModalButton}
                onPress={handleForgotPasswordSubmit}
              >
                <Text style={styles.forgotModalButtonText}>Onayla</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: "100%",
    height: 180,
    position: "relative",
    justifyContent: "flex-end",
    backgroundColor: "#1B0045",
  },
  bannerImage: {
    width: "100%",
    height: 180,
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(27,0,69,0.55)",
  },
  homeIconContainer: {
    position: "absolute",
    top: 55,
    left: 18,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
    padding: 6,
    width: 32, // Added for the new SVG size
    height: 32, // Added for the new SVG size
    alignItems: "center", // Center the icon
    justifyContent: "center", // Center the icon
  },
  bannerTextContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },
  bannerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: "Poppins",
    fontStyle: "normal",
  },
  bannerTextBold: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Poppins",
    letterSpacing: 0.5,
    fontStyle: "normal",
  },

  formContainer: {
    backgroundColor: "#12002F",
    marginTop: 0,
    paddingHorizontal: 24,
    paddingTop: 32,
    flex: 1,
    minHeight: 500,
  },
  formTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 24,
  },
  input: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    paddingRight: 16,
  },
  underline: {
    height: 1,
    backgroundColor: "#9EF3FF",
    marginBottom: 23,
  },
  passwordHint: {
    color: "#B6B6B6",
    fontSize: 12,
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  termsText: {
    color: "#B6B6B6",
    fontSize: 12,
    marginBottom: 32,
    marginTop: 16,
    textAlign: "left",
    lineHeight: 20,
  },
  link: {
    color: "#5dd3d3",
    textDecorationLine: "underline",
  },
  signInButton: {
    backgroundColor: "#7B61FF",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  signInButtonDisabled: {
    backgroundColor: "#4A3A7D",
    opacity: 1,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  loginText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 10,
    lineHeight: 12,
    color: "#B6B6B6",
  },
  forgotModalOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "flex-end",
    zIndex: 100,
  },
  forgotModalContainer: {
    backgroundColor: "#0E012A",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    minHeight: 365,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  forgotModalBar: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#fff",
    opacity: 0.2,
    marginBottom: 8,
  },
  forgotModalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  forgotModalDesc: {
    color: "#B6B6B6",
    fontSize: 14,
    marginBottom: 18,
  },
  forgotModalLabel: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 4,
    marginTop: 8,
  },
  forgotModalInput: {
    backgroundColor: "#12002F",
    color: "#fff",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderBottomColor: "#2D1A5A",
  },
  forgotModalButton: {
    backgroundColor: "#7B61FF",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  forgotModalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotModalError: {
    color: "#FF6B6B",
    fontSize: 13,
    marginBottom: 4,
    marginTop: 2,
  },
  forgotModalSuccess: {
    color: "#7BFFB2",
    fontSize: 13,
    marginBottom: 4,
    marginTop: 2,
  },
});
