# Accessible User Profile Dashboard

## Project Overview

Accessible User Profile Dashboard is a frontend application built using **React**, **Vite**, **Cypress**, **axe-core**, and **Docker**.

The project demonstrates accessibility-first development practices, protected routing, keyboard navigation testing, automated accessibility validation, and containerized execution.

The application consists of three pages:

* Login Page (`/login`)
* Dashboard Page (`/dashboard`)
* Profile Edit Page (`/profile/edit`)

The project includes automated accessibility testing using Cypress and axe-core, keyboard navigation testing, accessibility reporting, and Docker-based deployment.

---

# Technologies Used

* React
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router DOM
* Cypress
* axe-core
* cypress-axe
* Mochawesome
* Docker
* Docker Compose

---

# Application Features

## 1. Login Page

**Route:** `/login`

### Features

* Username input field
* Password input field
* Login button
* Error message container
* Skip to main content link
* Accessible form labels
* Keyboard accessible navigation

### Mock Credentials

Username:

```text
testuser
```

Password:

```text
password
```

### Required Testing Attributes

| Element        | data-testid    |
| -------------- | -------------- |
| Login Form     | login-form     |
| Username Input | username-input |
| Password Input | password-input |
| Login Button   | login-button   |
| Error Message  | login-error    |
| Skip Link      | skip-to-main   |

---

## 2. Dashboard Page

**Route:** `/dashboard`

### Features

* Protected route
* Welcome section
* Navigation menu
* User data table
* Logout functionality

### Required Testing Attributes

| Element         | data-testid     |
| --------------- | --------------- |
| Navigation      | main-navigation |
| User Table      | user-table      |
| First User Row  | user-row-0      |
| Second User Row | user-row-1      |
| Third User Row  | user-row-2      |
| Main Heading    | page-heading    |
| Logout Button   | logout-button   |

---

## 3. Profile Edit Page

**Route:** `/profile/edit`

### Features

* Name input
* Email input
* Biography textarea
* Color preference dropdown
* Save functionality
* Cancel functionality
* Success feedback message

### Required Testing Attributes

| Element            | data-testid             |
| ------------------ | ----------------------- |
| Profile Form       | profile-form            |
| Name Input         | name-input              |
| Email Input        | email-input             |
| Biography Textarea | bio-textarea            |
| Color Select       | color-preference-select |
| Save Button        | save-button             |
| Cancel Button      | cancel-button           |
| Success Message    | success-message         |

---

# Accessibility Implementation

The application follows accessibility best practices:

* Semantic HTML elements
* Proper form labels
* Keyboard navigable interface
* Focus indicators
* Skip navigation link
* Accessible tables
* ARIA support where required
* WCAG-friendly structure

Accessibility validation is performed using:

* axe-core
* cypress-axe

---

# Cypress Test Suite

All Cypress tests are located inside:

```text
cypress/e2e
```

### Included Test Files

```text
accessibility-login.cy.js
accessibility-dashboard.cy.js
accessibility-forms.cy.js
keyboard-navigation.cy.js
```

### Test Coverage

#### Login Accessibility

* Login page accessibility validation
* Required element verification

#### Dashboard Accessibility

* Dashboard accessibility validation
* Navigation and table verification

#### Profile Accessibility

* Form accessibility validation
* Form element verification

#### Keyboard Navigation

* Tab navigation
* Focus management
* Enter key interactions

---

# Accessibility Reports

Generated report location:

```text
cypress/reports/accessibility-report.json
```

The report contains axe-core accessibility violations.

The application is configured to have:

* No critical accessibility violations
* No serious accessibility violations

---

# Mochawesome Test Report

Generated report location:

```text
cypress/reports/mochawesome.html
```

The report contains Cypress execution results and test summaries.

---

# Project Structure

```text
accessible-dashboard/
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── cypress.config.js
├── README.md
│
├── src/
│   ├── pages/
│   ├── routes/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
│
├── cypress/
│   ├── e2e/
│   │   ├── accessibility-login.cy.js
│   │   ├── accessibility-dashboard.cy.js
│   │   ├── accessibility-forms.cy.js
│   │   └── keyboard-navigation.cy.js
│   │
│   ├── reports/
│   │   ├── accessibility-report.json
│   │   └── mochawesome.html
│   │
│   └── support/
│       └── e2e.js
│
└── public/
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd accessible-dashboard
```

Install dependencies:

```bash
npm install
```

---

# Running the Application

Start development server:

```bash
npm run dev
```

Application URL:

```text
http://localhost:5173
```

---

# Running Cypress

Open Cypress UI:

```bash
npx cypress open
```

Run Cypress in headless mode:

```bash
npx cypress run
```

---

# Running with Docker

Build containers:

```bash
docker compose build
```

Run application:

```bash
docker compose up -d
```

Application URL:

```text
http://localhost:3001
```

Stop containers:

```bash
docker compose down
```

---

# Docker Configuration

The project includes:

## App Service

* React application container
* Exposed on host port 3001

## Cypress Test Service

* Cypress Included Image
* Report volume persistence
* Automated testing support

---

# Generated Reports

After running tests:

```text
cypress/reports/accessibility-report.json
cypress/reports/mochawesome.html
```

will be generated.

---

# Assignment Requirements Covered

* Login page implementation
* Dashboard page implementation
* Profile edit page implementation
* Protected routing
* Accessibility compliance
* Cypress accessibility testing
* Keyboard navigation testing
* Accessibility report generation
* Mochawesome report generation
* Docker containerization
* Docker Compose orchestration
* Required project structure
* Required data-testid attributes
