import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddIncome from "./components/AddIncome";
import AddExpense from "./components/AddExpense";
import TransactionTable from "./components/TransactionTable";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  });

  const loadData = () => {
    axios.get("http://localhost:8080/transactions").then((response) => {
      setTransactions(response.data);
    });

    axios.get("http://localhost:8080/transactions/summary").then((response) => {
      setSummary(response.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const addTransaction = (transaction) => {
    axios.post("http://localhost:8080/transactions", transaction).then(() => {
      loadData();
    });
  };

  const deleteTransaction = (id) => {
    axios.delete(`http://localhost:8080/transactions/${id}`).then(() => {
      loadData();
    });
  };

  return (
    <div>
      <Navbar />
      <Dashboard summary={summary} />
      <div className="main-content">
        <AddIncome addTransaction={addTransaction} />
        <AddExpense addTransaction={addTransaction} />
      </div>
      <TransactionTable
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
