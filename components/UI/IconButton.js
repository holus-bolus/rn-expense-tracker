import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Ionicons
          name={icon}
          size={size}
          color={color}
          style={(pressed) => pressed && styles.pressed}
        />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
