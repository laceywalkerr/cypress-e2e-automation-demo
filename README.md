# Cypress E2E Automation Demo

This project demonstrates a structured end-to-end automation framework using Cypress.

## What This Project Demonstrates

- Page Object Model (POM) architecture
- Custom Cypress commands
- Structured test layering
- Clean assertion practices
- Config-driven environment setup
- Retry configuration for CI stability

## Tech Stack

- Cypress v15
- Node v24
- JavaScript (ES6 modules)

## Test Coverage

### Authentication Flow
- Valid login
- Invalid login handling

### Cart Flow
- Add item to cart
- Cart badge validation
- Cart page verification

## Framework Design Decisions

- `baseUrl` configured in `cypress.config.js`
- Page objects used for UI abstraction
- Custom `cy.login()` command for reusable authentication
- Retries enabled in run mode to simulate CI robustness
- Video disabled to keep repository clean

## How to Run

Install dependencies:

```bash
npm install
