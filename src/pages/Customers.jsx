import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const customers = [
  {
    id: "CUS001",
    name: "Aarav Sharma",
    email: "aarav@gmail.com",
    transactions: 42,
    spent: 125000,
    status: "Active",
  },
  {
    id: "CUS002",
    name: "Priya Verma",
    email: "priya@gmail.com",
    transactions: 35,
    spent: 98750,
    status: "Active",
  },
  {
    id: "CUS003",
    name: "Rohan Mehta",
    email: "rohan@gmail.com",
    transactions: 28,
    spent: 76200,
    status: "Active",
  },
  {
    id: "CUS004",
    name: "Ananya Patel",
    email: "ananya@gmail.com",
    transactions: 19,
    spent: 54300,
    status: "Inactive",
  },
  {
    id: "CUS005",
    name: "Kabir Singh",
    email: "kabir@gmail.com",
    transactions: 51,
    spent: 156400,
    status: "Active",
  },
  {
    id: "CUS006",
    name: "Ishita Jain",
    email: "ishita@gmail.com",
    transactions: 31,
    spent: 82900,
    status: "Active",
  },
];

function Customers() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="page-heading">
            <div>
              <h1>Customers</h1>
              <p>Manage and monitor your customer base.</p>
            </div>
          </div>

          {/* Customer Stats */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-card-top">
                <span>Total Customers</span>
              </div>

              <h3>8,549</h3>

              <p>+5.7% from last month</p>
            </div>

            <div className="stat-card">
              <div className="stat-card-top">
                <span>Active Customers</span>
              </div>

              <h3>7,892</h3>

              <p>92.3% of total customers</p>
            </div>

            <div className="stat-card">
              <div className="stat-card-top">
                <span>New Customers</span>
              </div>

              <h3>426</h3>

              <p>This month</p>
            </div>

            <div className="stat-card">
              <div className="stat-card-top">
                <span>Avg. Customer Value</span>
              </div>

              <h3>₹28,450</h3>

              <p>+6.4% from last month</p>
            </div>

          </div>

          {/* Customers Table */}

          <div className="transaction-card">

            <div className="section-header">
              <div>
                <h3>Customer List</h3>
                <p>{customers.length} customers displayed</p>
              </div>

              <button className="view-all">
                Add Customer
              </button>
            </div>

            <div className="table-wrapper">
              <table>

                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Customer ID</th>
                    <th>Transactions</th>
                    <th>Total Spent</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  {customers.map((customer) => (
                    <tr key={customer.id}>

                      <td>
                        <div className="customer">
                          <strong>{customer.name}</strong>
                          <span>{customer.email}</span>
                        </div>
                      </td>

                      <td>
                        <strong>{customer.id}</strong>
                      </td>

                      <td>
                        {customer.transactions}
                      </td>

                      <td className="amount">
                        ₹{customer.spent.toLocaleString("en-IN")}
                      </td>

                      <td>
                        <span
                          className={`status ${
                            customer.status.toLowerCase()
                          }`}
                        >
                          {customer.status}
                        </span>
                      </td>

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

export default Customers;