import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Onboarding Screens
import SplashScreen from "../screens/onboarding/SplashScreen";
import OnboardingNewScreen1 from "../screens/onboarding/OnboardingNewScreen1";
import OnboardingNewScreen2 from "../screens/onboarding/OnboardingNewScreen2";
import OnboardingNewScreen3 from "../screens/onboarding/OnboardingNewScreen3";
import SignUp from "../screens/sign/SignUp";
import SignIn from "../screens/sign/SignIn";
import HomePage from "../screens/home/HomePage";
// Yeni ekranları buraya import edin
import BandSearch from "../screens/home/BandSearch";
import MusicianSearch from "../screens/home/MusicianSearch";
// import MusicEducationPage from "../screens/home/MusicEducation";
// import SectoralServicePage from "../screens/home/SectoralService";
import EventService from "../screens/home/EventService";

export type RootStackParamList = {
  Splash: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  SignUp: undefined;
  SignIn: undefined;
  HomePage: undefined;
  BandSearch: undefined;
  MusicianSearch: undefined; // Yeni ekran
  // MusicEducation: undefined; // Yeni ekran
  // SectoralService: undefined; // Yeni ekran
  EventService: undefined; // Yeni ekran
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={OnboardingNewScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingNewScreen2} />
        <Stack.Screen name="Onboarding3" component={OnboardingNewScreen3} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="HomePage" component={HomePage} />
        {/* Yeni ekranları buraya ekledik */}
        <Stack.Screen name="BandSearch" component={BandSearch} />
        <Stack.Screen name="MusicianSearch" component={MusicianSearch} />
        {/* <Stack.Screen name="MusicEducation" component={MusicEducation} />
        <Stack.Screen name="SectoralService" component={SectoralService} />*/}
        <Stack.Screen name="EventService" component={EventService} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
