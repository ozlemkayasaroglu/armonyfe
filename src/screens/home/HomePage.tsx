import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/AppNavigator";

const { width } = Dimensions.get("window");

// Logo PNG
const Logo = () => (
  <Image
    source={require("../../../assets/images/logotype.png")}
    style={{ width: 89.2, height: 23, marginBottom: -10 }}
  />
);

// Tab bar icons
const HomeIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#fff" />
  </Svg>
);

const ProfileIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z"
      fill="#fff"
    />
  </Svg>
);

// Mock data for cards
const cards = [
  {
    type: "Müzik Grubu Arıyorum",
    user: "Kıvılcım Çağatay",
    city: "Kahramanmaraş",
    image: require("../../../assets/images/image27.png"),
    section: "Çaldığım Enstrümanlar",
    tags: ["Elektro Gitar", "Bas Gitar"],
    color: "#FF6B8A",
    targetScreen: "BandSearch",
  },
  {
    type: "Müzisyen Arıyorum",
    user: "Kıvılcım Çağatay",
    city: "Kahramanmaraş",
    image: require("../../../assets/images/image27.png"),
    section: "Aradığım Müzisyenler",
    tags: ["Elektro Gitar", "Akustik Gitar"],
    color: "#FF6B8A",
    targetScreen: "MusicianSearch",
  },
  {
    type: "Müzik Eğitimi",
    user: "Cemre Kabaş",
    city: "İzmir",
    image: require("../../../assets/images/image27.png"),
    section: "Verilen Eğitimler",
    tags: ["Müzik Prodüktörlüğü", "Mixing", "Mastering"],
    color: "#1DE9B6",
    targetScreen: "MusicEducation",
  },
  {
    type: "Sektörel Hizmet",
    user: "Kıvılcım Çağatay",
    city: "Kahramanmaraş",
    image: require("../../../assets/images/image27.png"),
    section: "Verilen Hizmetler",
    tags: ["Müzik Prodüktörlüğü", "Mixing"],
    color: "#B388FF",
    targetScreen: "SectoralService",
  },
  {
    type: "Etkinlik Hizmeti",
    user: "Kıvılcım Çağatay",
    city: "Kahramanmaraş",
    image: require("../../../assets/images/image27.png"),
    section: "Verilen Hizmetler",
    tags: ["Trio Grup", "Bando", "Müzik Grubu"],
    color: "#00B0FF",
    targetScreen: "EventService",
  },
];

export default function HomePage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Path
              d="M4 6h16M4 12h10M4 18h6"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </Svg>
        </TouchableOpacity>
        <Logo />
        <TouchableOpacity>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Path
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      {/* YouTube Banner */}
      <View style={styles.youtubeBanner}>
        <Image
          source={require("../../../assets/images/youtube.png")}
          style={styles.youtubeLogo}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.youtubeText}>
            <Text style={{ fontWeight: "bold" }}>YouTube </Text>
            performansını ekle{"\n"}müzikal profilini güçlendir!
          </Text>
        </View>
      </View>
      {/* Cards */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {cards.map((card, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => {
              navigation.navigate(card.targetScreen);
            }}
            style={[styles.card, { borderTopColor: card.color }]}
          >
            <View style={styles.cardHeader}>
              <Image source={card.image} style={styles.cardImage} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.cardTitle}>{card.type}</Text>
                <Text style={styles.cardUser}>{card.user}</Text>
                <Text style={styles.cardCity}>{card.city}</Text>
              </View>
            </View>
            <Text style={styles.cardSection}>{card.section}</Text>
            <View style={styles.underline} />
            <View style={styles.cardTagsRow}>
              {card.tags.map((tag, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.cardTag,
                    {
                      borderColor: card.color,
                      backgroundColor: card.color + "22",
                    },
                  ]}
                >
                  <Text style={[styles.cardTagText, { color: card.color }]}>
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 80 }} />
      </ScrollView>
      {/* Tab Bar */}
      <SafeAreaView style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItemActive}>
          <HomeIcon />
          <Text style={styles.tabLabelActive}>Anasayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            source={require("../../../assets/images/Music.png")}
            style={{ width: 28, height: 28 }}
          />
          <Text style={styles.tabLabel}>İlanlar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <ProfileIcon />
          <Text style={styles.tabLabel}>Profil</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12002F",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 44,
    paddingBottom: 12,
    backgroundColor: "#1B0045",
  },
  youtubeBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 18,
    marginBottom: 24,
    padding: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  youtubeLogo: {
    width: 48,
    height: 32,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    resizeMode: "contain",
  },
  youtubeText: {
    color: "#1B0045",
    fontSize: 14,
    fontWeight: "400",
  },
  card: {
    backgroundColor: "#23104B",
    borderRadius: 16,
    marginHorizontal: 18,
    marginBottom: 18,
    padding: 16,
    borderTopWidth: 6,
    // borderTopColor: dynamic
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  cardUser: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "400",
  },
  underline: {
    height: 1,
    backgroundColor: "#9EF3FF",
    marginBottom: 12,
  },
  cardCity: {
    color: "#B6B6B6",
    fontSize: 12,
    fontWeight: "400",
  },
  cardSection: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 8,
    marginBottom: 4,
  },
  cardTagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  cardTag: {
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  cardTagText: {
    fontSize: 13,
    fontWeight: "500",
  },
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1B0045",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
  },
  tabItem: {
    alignItems: "center",
    flex: 1,
    opacity: 0.7,
  },
  tabItemActive: {
    alignItems: "center",
    flex: 1,
    opacity: 1,
  },
  tabLabel: {
    color: "#fff",
    fontSize: 12,
    marginTop: 2,
  },
  tabLabelActive: {
    color: "#7B61FF",
    fontSize: 12,
    marginTop: 2,
    fontWeight: "700",
  },
});
