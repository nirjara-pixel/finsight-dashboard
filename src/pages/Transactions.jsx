import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { transactions } from "../data/transactions";

function Transactions() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredTransactions = transactions.filter((transaction) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      transaction.id.toLowerCase().includes(searchText) ||
      transaction.customer.toLowerCase().includes(searchText) ||
      transaction.email.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      transaction.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="page-heading">
            <div>
              <h1>Transactions</h1>
              <p>Manage and monitor all financial transactions.</p>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="transaction-toolbar">
            <input
              type="text"
              placeholder="Search transactions..."
              className="transaction-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="transaction-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          {/* Transactions Table */}
          <div className="transaction-card">

            <div className="section-header">
              <div>
                <h3>All Transactions</h3>
                <p>
                  {filteredTransactions.length} transactions found
                </p>
              </div>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Transaction</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id}>

                      <td>
                        <strong>{transaction.id}</strong>
                      </td>

                      <td>
                        <div className="customer">
                          <strong>{transaction.customer}</strong>
                          <span>{transaction.email}</span>
                        </div>
                      </td>

                      <td className="amount">
                        ₹{transaction.amount.toLocaleString("en-IN")}
                      </td>

                      <td>{transaction.method}</td>

                      <td>
                        <span
                          className={`status ${transaction.status.toLowerCase()}`}
                        >
                          {transaction.status}
                        </span>
                      </td>

                      <td>{transaction.date}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </section>
      </main>
    </div>
  );
}

export default Transactions;