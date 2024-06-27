import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Button = ({ children, onPress, mode }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          mode === "flat" && styles.flat,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    overflow: "hidden",
  },
  button: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary200,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary500,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  innerContainer: {
    padding: 10,
  },
});
