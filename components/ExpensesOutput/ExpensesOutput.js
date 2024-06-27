import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Shoes",
    amount: 99.99,
    date: new Date(2021, 6, 14),
  },
  {
    id: "e2",
    title: "New Shirt",
    amount: 39.99,
    date: new Date(2021, 6, 15),
  },
  {
    id: "e3",
    title: "New Pants",
    amount: 59.99,
    date: new Date(2021, 6, 16),
  },
  {
    id: "e4",
    title: "New Hat",
    amount: 29.99,
    date: new Date(2021, 6, 17),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
