import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (
      username === "testuser" &&
      password === "password"
    ) {
      localStorage.setItem(
        "isAuthenticated",
        "true"
      );

      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <a
        href="#main-content"
        data-testid="skip-to-main"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <form
          data-testid="login-form"
          onSubmit={handleLogin}
        >
          <h1>Login</h1>

          <label htmlFor="username">
            Username
          </label>

          <input
            id="username"
            name="username"
            data-testid="username-input"
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            data-testid="password-input"
          />

          <button
            type="submit"
            data-testid="login-button"
          >
            Login
          </button>

          <div
            role="alert"
            data-testid="login-error"
          >
            {error}
          </div>
        </form>
      </main>
    </>
  );
}