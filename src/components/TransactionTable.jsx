import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

function TransactionTable({ transactions }) {
  return (
    <div className="transaction-card">
      <div className="section-header">
        <div>
          <h3>Recent Transactions</h3>
          <p>Your latest financial activity</p>
        </div>

        <button className="view-all">View All</button>
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
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>
                  <div className="transaction-id">
                    <div className="transaction-icon">
                      {transaction.status === "Completed" ? (
                        <ArrowDownLeft size={16} />
                      ) : (
                        <ArrowUpRight size={16} />
                      )}
                    </div>

                    <span>{transaction.id}</span>
                  </div>
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
  );
}

export default TransactionTable;