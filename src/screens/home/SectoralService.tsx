import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

// Icon for close (X)
const CloseIcon = (props: React.ComponentProps<typeof Svg>) => (
  <Svg width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 6L6 18"
      stroke="#fff"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 6l12 12"
      stroke="#fff"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
  </Svg>
);

// Icon for calendar
const CalendarIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M7 2v2M17 2v2M3 7h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
      stroke="#B6B6B6"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
// Icon for location
const LocationIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 21s-6-5.686-6-10A6 6 0 1112 21z"
      stroke="#B6B6B6"
      strokeWidth={1.5}
    />
    <Path
      d="M12 11a2 2 0 100-4 2 2 0 000 4z"
      stroke="#B6B6B6"
      strokeWidth={1.5}
    />
  </Svg>
);
// Icon for dots
const DotsIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4z"
      fill="#B6B6B6"
    />
  </Svg>
);
// Icon for send
const SendIcon = () => (
  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
    <Path d="M3 20l18-8-18-8v6l15 2-15 2v6z" fill="#ebebedff" />
  </Svg>
);
// Instrument icons
import TalentIcon from "../../../assets/images/talent-icon.png";

export default function SectoralService() {
  return (
    <View style={styles.container}>
      {/* Üst başlık barı */}
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Sektörel Hizmet</Text>
        <TouchableOpacity style={styles.headerClose}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Profil kartı */}
        <View style={styles.profileRow}>
          <Image
            source={require("../../../assets/images/image27.png")}
            style={styles.profileImage}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.profileName}>Direnç Sümer</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <CalendarIcon />
              <Text style={styles.profileDate}>15.06.2024</Text>
              <View style={{ marginLeft: 10 }}>
                <LocationIcon />
              </View>
              <Text style={styles.profileCity}>Kahramanmaraş</Text>
            </View>
          </View>
          <TouchableOpacity>
            <DotsIcon />
          </TouchableOpacity>
        </View>
        {/* Açıklama */}
        <Text style={styles.description}>
          Demo kayıtlarınızı daha profesyonel bir hale getirebilirim.
        </Text>
        {/* Müzik Tarzı */}
        <Text style={styles.sectionTitle}>Verdiğim Hizmetler</Text>
        <View style={styles.underline} />
        <View style={styles.tagRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Müzik Prodüktörlüğü</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Mixing</Text>
          </View>
        </View>
      </ScrollView>
      {/* Mesaj Gönder Butonu */}
      <View style={styles.sendBar}>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Mesaj Gönder</Text>
          <SendIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181F4B",
  },
  headerBar: {
    backgroundColor: "#B388FF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 32,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
  },
  headerClose: {
    position: "absolute",
    right: 18,
    top: 32,
    padding: 4,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 18,
    marginBottom: 8,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  profileName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  profileDate: {
    color: "#B6B6B6",
    fontSize: 12,
    marginLeft: 4,
    marginRight: 8,
  },
  profileCity: {
    color: "#B6B6B6",
    fontSize: 12,
    marginLeft: 4,
  },
  description: {
    color: "#fff",
    fontSize: 13,
    marginHorizontal: 18,
    marginBottom: 18,
    marginTop: 2,
    fontWeight: "400",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 18,
    marginTop: 8,
    marginBottom: 2,
  },
  underline: {
    height: 1,
    backgroundColor: "#9EF3FF",
    marginHorizontal: 18,
    marginBottom: 12,
  },
  tagRow: {
    flexDirection: "row",
    marginHorizontal: 18,
    marginBottom: 8,
    gap: 8,
  },
  tag: {
    borderWidth: 1.5,
    borderColor: "#B388FF",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 6,
  },
  tagText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },
  // Updated styles
  instrumentRow: {
    flexDirection: "row", // Yan yana hizalama için
    justifyContent: "flex-start", // İçerikleri baştan itibaren hizalamak için
    marginHorizontal: 18,
    marginBottom: 8,
    gap: 16, // Enstrümanlar arasında boşluk bırakmak için
  },
  instrumentTag: {
    flexDirection: "column", // Resim ve metni alt alta hizalama
    alignItems: "center", // Yatayda ortalama
  },
  instrumentText: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "400",
    marginTop: 2,
    textAlign: "center", // Metni ortalama
    minHeight: 30, // Ensures consistent height for one or two lines
  },
  sendBar: {
    padding: 18,
    backgroundColor: "#181F4B",
    paddingBottom: 60,
  },
  sendButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderColor: "#11333366",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
});
