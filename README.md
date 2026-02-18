# Cypress E2E Automation Framework (Demo)

This repository demonstrates a structured, maintainable end-to-end automation framework built with Cypress.

The purpose of this project is to model real-world automation architecture decisions — including abstraction, traceability, determinism, and CI readiness — rather than provide tutorial-style examples.

---

## Architecture Highlights

- Page Object Model (POM) for UI abstraction  
- Custom Cypress commands for reusable workflows  
- Deterministic test setup via controlled login state  
- Clear test case identification (`TC-#`)  
- JIRA-style ticket traceability (`#JIRA-1234`)  
- Explicit DOM readiness assertions for stability  
- CI-aware configuration and run-mode behavior  

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
- Login abstracted into a custom command while keeping validation visible  
- Assertions remain in the spec layer for clarity and auditability  
- Tests avoid cross-test state dependency  
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

This project reflects a mid-level automation structure focused on clarity, stability, traceability, and maintainability, with an emphasis on deterministic behavior over tutorial shortcuts.

