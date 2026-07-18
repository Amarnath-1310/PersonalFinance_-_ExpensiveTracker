import React from "react";

function TransactionTable({ transactions, deleteTransaction }) {
  return (
    <div className="table-box">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.description}</td>
              <td>${item.amount}</td>
              <td>
                <button onClick={() => deleteTransaction(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
