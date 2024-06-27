import { View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";

const MangeExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const deleteExpenseHandler = () => {};
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {};
  return (
    <View style={styles.container}>
      <View>
        <Button mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button onPress={confirmHandler}>
          {isEditing ? "Save Changes" : "Add Expense"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={24}
            color={GlobalStyles.colors.accent500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default MangeExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
