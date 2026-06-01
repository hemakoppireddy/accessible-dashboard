import { Link, useNavigate } from "react-router-dom";
import { users } from "../data/users";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <main className="dashboard-container">
      <nav data-testid="main-navigation" className="navbar">
        <h2>Accessible Dashboard</h2>

        <div className="nav-links">
          <Link to="/profile/edit">Edit Profile</Link>

          <button
            data-testid="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      <section className="hero-card">
        <h1 data-testid="page-heading">
          Welcome Back 👋
        </h1>

        <p>
          Manage your profile and review user information.
        </p>
      </section>

      <section className="table-card">
        <h2>User Directory</h2>

        <table data-testid="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                data-testid={`user-row-${index}`}
              >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}