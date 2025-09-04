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

const { width } = Dimensions.get("window");

// Mock SVG components for eye and eye-off icons
const EyeIcon = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 4.5C7 4.5 2.73 7.61 0 12c2.73 4.39 7 7.5 12 7.5s9.27-3.11 12-7.5c-2.73-4.39-7-7.5-12-7.5zm0 13c-3.03 0-5.5-2.47-5.5-5.5S8.97 6.5 12 6.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5zm0-9.5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
      fill="#B6B6B6"
    />
  </Svg>
);

const EyeOffIcon = (props) => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 4.5c5.17 0 9.27 3.11 12 7.5-1.28 2.07-2.9 3.75-4.78 4.96l2.13 2.13c1.92-1.42 3.66-3.32 5.15-5.61-2.73-4.39-7-7.5-12-7.5-2.07 0-4.07.61-5.83 1.76l2.17 2.17c1.37-.62 2.89-1.01 4.49-1.01 3.03 0 5.5 2.47 5.5 5.5 0 .86-.2 1.68-.58 2.4l2.16 2.16c1.19-1.57 2.16-3.36 2.82-5.35L19.46 19 21 20.54l-1.54 1.54L12 14.54l-9-9L0 4l1.5-1.5 20 20z"
      fill="#B6B6B6"
    />
  </Svg>
);

export default function SignUp1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = name && email && password.length >= 6;

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
            <Image
              source={require("../../../assets/svg/Vector.svg")}
              style={styles.homeIcon}
              resizeMode="contain"
            />
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
          <Text style={styles.formTitle}>Üyelik Oluştur</Text>

          {/* İsim alanı */}
          <View>
            {nameFocused || name ? (
              <Text
                style={{
                  color: "#B6B6B6",
                  fontSize: 10,
                  marginLeft: 14,
                  marginBottom: -12,
                }}
              >
                İsim
              </Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder={nameFocused || name ? "Placeholder Text" : "İsim"}
              placeholderTextColor={"#B6B6B6"}
              value={name}
              onChangeText={setName}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />
          </View>
          <View style={styles.underline} />

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
                  <Text style={{ color: "#B6B6B6", fontSize: 10 }}>
                    min 6 karakter
                  </Text>
                </View>
              ) : null}
              {passwordFocused || password ? (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{
                    paddingHorizontal: 10,
                  }}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </TouchableOpacity>
              ) : null}
            </View>
          </View>

          <View style={styles.underline} />

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
              styles.signUpButton,
              !isFormValid && styles.signUpButtonDisabled,
            ]}
            disabled={!isFormValid}
          >
            <Text style={styles.signUpButtonText}>Üye Ol</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.loginText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
        {/* Close the ScrollView here */}
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
  },
  homeIcon: {
    width: 32,
    height: 32,
    paddingLeft: 16,
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
  signUpButton: {
    backgroundColor: "#7B61FF",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  signUpButtonDisabled: {
    backgroundColor: "#7B61FF",
    opacity: 0.4,
  },
  signUpButtonText: {
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
});
