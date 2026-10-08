import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { revenueData } from "../data/dashboardData";

const monthlyTransactions = [
  { month: "Jan", transactions: 1200 },
  { month: "Feb", transactions: 1450 },
  { month: "Mar", transactions: 1380 },
  { month: "Apr", transactions: 1750 },
  { month: "May", transactions: 2100 },
  { month: "Jun", transactions: 2350 },
  { month: "Jul", transactions: 2200 },
  { month: "Aug", transactions: 2600 },
  { month: "Sep", transactions: 2480 },
  { month: "Oct", transactions: 2900 },
];

function Analytics() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="page-heading">
            <div>
              <h1>Analytics</h1>
              <p>Track your financial performance and trends.</p>
            </div>
          </div>

          {/* KPI Cards */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-card-top">
                <span>Total Revenue</span>
              </div>

              <h3>₹24,56,890</h3>

              <p>+12.5% from last month</p>
            </div>

            <div className="stat-card">
              <div className="stat-card-top">
                <span>Transactions</span>
              </div>

              <h3>18,429</h3>

              <p>+8.2% from last month</p>
            </div>

            <div className="stat-card">
              <div className="stat-card-top">
                <span>Average Transaction</span>
              </div>

              <h3>₹13,332</h3>

              <p>+4.8% from last month</p>
            </div>

            <div className="stat-card">
              <div className="stat-card-top">
                <span>Success Rate</span>
              </div>

              <h3>94.8%</h3>

              <p>+2.1% from last month</p>
            </div>

          </div>

          {/* Charts */}

          <div className="charts-grid">

            {/* Revenue */}

            <div className="chart-card">
              <div className="chart-header">
                <div>
                  <h3>Revenue Trend</h3>
                  <p>Monthly revenue performance</p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip
                    formatter={(value) =>
                      `₹${Number(value).toLocaleString("en-IN")}`
                    }
                  />

                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Transactions */}

            <div className="chart-card">
              <div className="chart-header">
                <div>
                  <h3>Transaction Volume</h3>
                  <p>Monthly transaction count</p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyTransactions}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="transactions"
                    fill="#06b6d4"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>

        </section>
      </main>
    </div>
  );
}

export default Analytics;