import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function StatCard({ title, value, change, positive }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span>{title}</span>

        <div className={`stat-change ${positive ? "positive" : "negative"}`}>
          {positive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}
          <span>{change}</span>
        </div>
      </div>

      <h3>{value}</h3>

      <p>Compared to last month</p>
    </div>
  );
}

export default StatCard;