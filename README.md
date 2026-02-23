# Cypress E2E Automation Framework (Demo)

This repository demonstrates a structured, maintainable end-to-end automation framework built with Cypress.

The purpose of this project is to model real-world automation architecture decisions, including abstraction, traceability, determinism, controlled test data, network isolation, and CI readiness, rather than provide tutorial-style examples.

---

## Architecture Highlights

- Page Object Model (POM) for UI abstraction
- Domain-based test separation (Authentication vs Shopping flows)
- Custom Cypress commands for reusable, deterministic login
- Fixture-driven test data validation
- Negative scenario coverage
- Network stubbing via cy.intercept() for deterministic rendering and isolation
- Structured test case numbering
- JIRA-style ticket traceability (#JIRA-XXXX)
- Explicit DOM readiness assertions for stability
- CI-aware retry configuration

---

## Test Naming Convention

Each test follows a structured format:

```
[TC-#] [#JIRA-XXXX] Verify that ...
```

This mirrors enterprise QA environments where:

- Tests are traceable to backlog tickets  
- Cases are uniquely identifiable  
- Behavior is documented in clear verification language
- Changes can be audited against release tickets  

---

## Tech Stack

- Cypress v15  
- Node v24  
- JavaScript (ES6)

---

## Test Coverage

### Authentication
- Successful login validation  
- Locked-out user negative validation  

### Cart Flow
- Add item to cart  
- Cart badge assertion  
- Cart page verification
- Fixture-based validation of product description
- Fixture-based validation of product price

### Checkout Flow
- Successful end-to-end checkout
- Required field validation (negative scenario)

### Network Validation

- Deterministic stubbing of inventory page via cy.intercept()
- Status code validation and controlled DOM rendering

---

## Design Decisions

- `baseUrl` centralized in `cypress.config.js`
- Retry configuration applied for run mode to simulate CI behavior
- Login abstracted into a custom command while keeping validation visible  
- Assertions remain in the spec layer for clarity and auditability  
- Default Cypress test isolation preserved for reliability  
- Video artifacts disabled to keep repository clean  

---

## Running Locally

Install dependencies:

```bash
npm install
```

Open Cypress UI:

```bash
npx cypress open
```

Run headless:

```bash
npx cypress run
```

---

This project reflects a production-minded automation structure focused on clarity, stability, traceability, and maintainability, with an emphasis on deterministic behavior over tutorial shortcuts.

