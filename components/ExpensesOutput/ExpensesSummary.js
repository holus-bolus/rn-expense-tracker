import { Text, View } from "react-native";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0,
  );

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
