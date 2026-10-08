import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import TransactionTable from "../components/TransactionTable";

import {
  stats,
  revenueData,
  categoryData,
} from "../data/dashboardData";

import { transactions } from "../data/transactions";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Dashboard() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                positive={stat.positive}
              />
            ))}
          </div>

          {/* Charts */}
          <div className="charts-grid">

            {/* Revenue Chart */}
            <div className="chart-card revenue-card">
              <div className="chart-header">
                <div>
                  <h3>Revenue Overview</h3>
                  <p>Monthly revenue performance</p>
                </div>

                <span className="chart-period">2026</span>
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

            {/* Category Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <div>
                  <h3>Revenue Distribution</h3>
                  <p>By category</p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                   {categoryData.map((entry, index) => {
                    const colors = ["#4f46e5", "#06b6d4", "#8b5cf6", "#f59e0b"];

                return (
                 <Cell
                    key={`cell-${index}`}
                     fill={colors[index]}
    />
  );
})}
                  </Pie>

                  <Tooltip
                    formatter={(value) => `${value}%`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>

          {/* Transactions */}
          <TransactionTable
            transactions={transactions}
          />

        </section>
      </main>
    </div>
  );
}

export default Dashboard;