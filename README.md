# Automation Exercise Test Framework

[![License](https://img.shields.io/github/license/enableedge/playwright-typescript-enableedge?style=for-the-badge)](https://github.com/enableedge/playwright-typescript-enableedge)
[![GitHub issues](https://img.shields.io/github/issues/enableedge/playwright-typescript-enableedge?style=for-the-badge)](https://github.com/enableedge/playwright-typescript-enableedge/issues)


A comprehensive test automation framework built with TypeScript and Playwright for automating the web UI and API test cases.

## Description

This repository contains asample repository for UI and API automation using TypeScript and Playwright. The framework follows the Page Object Model (POM) design pattern and supports both UI and API testing.

## Getting Started

These instructions will help you set up and run the test framework on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- Java (v11 or higher for Allure Report)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/enableedge/playwright-typescript-enableedge.git
cd playwright-typescript-enableedge
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

### Running the Tests

To run all UI tests:
```bash
npm run test:ui
```

To run all API tests:
```bash
npm run test:api
```

To run specific test files:
```bash
npm run test -- <path-to-test-file>
```
![playwright-recording](./docs/playwright_recording.gif)
![allure-report](./docs/allure-report-pw.png)
### Built With

- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Playwright](https://playwright.dev/) - Test automation framework
- [Allure Report](https://docs.qameta.io/allure/) - Test reporting tool
- [Page Object Model](https://martinfowler.com/bliki/PageObject.html) - Design pattern

### License

This project is licensed under the MIT License - see the LICENSE file for details. 
