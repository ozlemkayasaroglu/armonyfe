import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

interface InstrumentCardProps {
  icon: any;
  label: string;
  color: string;
  onPress: () => void;
}

const InstrumentCard: React.FC<InstrumentCardProps> = ({
  icon,
  label,
  color,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.card, { backgroundColor: color }]}
    onPress={onPress}
  >
    <Image source={icon} style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 120,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 5,
    elevation: 2,
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 10,
    resizeMode: "contain",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default InstrumentCard;
