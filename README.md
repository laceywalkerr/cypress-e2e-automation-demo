# Cypress E2E Automation Framework (Demo)

This repository demonstrates a structured, maintainable end-to-end automation framework built with Cypress.

The goal of this project is not just to test functionality, but to model real-world test architecture decisions including abstraction, stability, and CI readiness.

---

## Architecture Highlights

- Page Object Model (POM) for UI abstraction  
- Custom Cypress commands for reusable workflows  
- Structured test separation (auth vs shopping domains)  
- Config-driven environment setup  
- Explicit stabilization via DOM readiness assertions  
- CI-aware retry configuration (run mode only)

---

## Tech Stack

- Cypress v15  
- Node v24  
- JavaScript (ES6)

---

## Test Coverage

### Authentication
- Successful login validation  
- Invalid credential handling  

### Cart Flow
- Add item to cart  
- Cart badge assertion  
- Cart page verification  

---

## Design Decisions

- `baseUrl` centralized in `cypress.config.js`  
- Assertions remain in the test layer (not embedded in commands)  
- Custom `cy.login()` command abstracts authentication without hiding validation  
- Retry configuration applied for run mode to simulate CI behavior  
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

This project reflects a mid-level automation structure focused on clarity, stability, and maintainability rather than tutorial-style examples.
