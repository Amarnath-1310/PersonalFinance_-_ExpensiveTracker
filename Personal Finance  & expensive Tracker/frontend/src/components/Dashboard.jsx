import React from "react";

function Dashboard({ summary }) {
  return (
    <div className="dashboard">
      <div className="card">
        <h3>Total Income</h3>
        <p>${summary.totalIncome}</p>
      </div>
      <div className="card">
        <h3>Total Expense</h3>
        <p>${summary.totalExpense}</p>
      </div>
      <div className="card">
        <h3>Current Balance</h3>
        <p>${summary.balance}</p>
      </div>
    </div>
  );
}

export default Dashboard;
