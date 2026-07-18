import React, { useState } from "react";

function AddExpense({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      type: "Expense",
      amount: parseFloat(amount),
      description,
      date,
    };
    addTransaction(transaction);
    setAmount("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="form-box">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Save Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
