import React, { createContext, useState } from "react";

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = ({ description, amount, date }) => {
    const newExpense = {
      id: Math.random().toString(),
      description,
      amount,
      date,
    };
    setExpenses((currentExpenses) => [...currentExpenses, newExpense]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== id),
    );
  };

  const updateExpenseHandler = (id, { description, amount, date }) => {
    setExpenses((currentExpenses) =>
      currentExpenses.map((expense) =>
        expense.id === id ? { ...expense, description, amount, date } : expense,
      ),
    );
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addExpense: addExpenseHandler,
        deleteExpense: deleteExpenseHandler,
        updateExpense: updateExpenseHandler,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export { ExpensesContext, ExpensesProvider };
