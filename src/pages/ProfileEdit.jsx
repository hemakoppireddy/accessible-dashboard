import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileEdit() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Profile updated successfully!");
  };

  return (
    <main className="profile-container">
      <div className="form-card">
        <h1>Edit Profile</h1>

        <form
          data-testid="profile-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">
            Full Name
          </label>

          <input
            id="name"
            data-testid="name-input"
            placeholder="Enter your name"
          />

          <label htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            data-testid="email-input"
            placeholder="Enter your email"
          />

          <label htmlFor="bio">
            Biography
          </label>

          <textarea
            id="bio"
            rows="4"
            data-testid="bio-textarea"
            placeholder="Tell us about yourself"
          />

          <label htmlFor="color">
            Color Preference
          </label>

          <select
            id="color"
            data-testid="color-preference-select"
          >
            <option>Blue</option>
            <option>Purple</option>
            <option>Green</option>
            <option>Red</option>
          </select>

          <div className="button-group">
            <button
              type="submit"
              data-testid="save-button"
            >
              Save Changes
            </button>

            <button
              type="button"
              data-testid="cancel-button"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>
          </div>

          <div
            data-testid="success-message"
            role="status"
          >
            {message}
          </div>
        </form>
      </div>
    </main>
  );
}