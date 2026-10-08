import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="page-heading">
            <div>
              <h1>Settings</h1>
              <p>Manage your account and application preferences.</p>
            </div>
          </div>

          {/* Profile Settings */}

          <div className="settings-card">
            <div className="settings-header">
              <div>
                <h3>Profile Information</h3>
                <p>Update your personal information.</p>
              </div>
            </div>

            <div className="settings-grid">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value="Nirjara Jain"
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value="nirjara@gmail.com"
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  value="Administrator"
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  value="FinSight"
                  readOnly
                />
              </div>

            </div>

            <button className="save-button">
              Save Changes
            </button>
          </div>

          {/* Notifications */}

          <div className="settings-card">

            <div className="settings-header">
              <div>
                <h3>Notifications</h3>
                <p>Choose what notifications you receive.</p>
              </div>
            </div>

            <div className="setting-row">
              <div>
                <strong>Email Notifications</strong>
                <p>Receive important updates via email.</p>
              </div>

              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span></span>
              </label>
            </div>

            <div className="setting-row">
              <div>
                <strong>Transaction Alerts</strong>
                <p>Get notified about important transactions.</p>
              </div>

              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span></span>
              </label>
            </div>

            <div className="setting-row">
              <div>
                <strong>Weekly Reports</strong>
                <p>Receive weekly financial performance reports.</p>
              </div>

              <label className="switch">
                <input type="checkbox" />
                <span></span>
              </label>
            </div>

          </div>

          {/* Security */}

          <div className="settings-card">

            <div className="settings-header">
              <div>
                <h3>Security</h3>
                <p>Manage your account security.</p>
              </div>
            </div>

            <div className="setting-row">
              <div>
                <strong>Two-Factor Authentication</strong>
                <p>Add an extra layer of security to your account.</p>
              </div>

              <button className="secondary-button">
                Enable
              </button>
            </div>

            <div className="setting-row">
              <div>
                <strong>Change Password</strong>
                <p>Update your account password regularly.</p>
              </div>

              <button className="secondary-button">
                Change
              </button>
            </div>

          </div>

        </section>
      </main>
    </div>
  );
}

export default Settings;