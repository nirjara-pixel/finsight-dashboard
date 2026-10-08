import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";

function Placeholder({ title }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>{title}</h1>
      <p>This page is under development.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

     <Route path="/transactions" element={<Transactions />} />

     <Route path="/analytics" element={<Analytics />} />

      <Route path="/customers" element={<Customers />} />

     <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;