# SauceDemo.com-QATest
## Project Overview
This repository demonstrates how to automate web application testing using **Playwright** (in JavaScript) while following the **Page Object Model (POM)** design pattern. The goal of this project is to provide a clean, scalable, and maintainable way to write automated tests for web applications. By organizing the tests using POM, it becomes easier to maintain, understand, and scale as the project grows.

This project includes:
- **Smoke Tests**: Quick tests that validate the essential features of the application, ensuring that critical paths work as expected (e.g., login, cart, checkout).
- **Normal Tests**: In-depth tests that cover a wide range of functionalities of the application, including edge cases, product sorting, and performance tests.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Installation Guide](#installation-guide)
3. [How the Code Works](#how-the-code-works)
4. [Running the Tests](#running-the-tests)

## Project Structure
The directory structure of this project is organized as follows:


 


### Key Components:
- **package.json**: package.json is a configuration file in Node.js projects that defines project metadata.
- **playwright.config.js**: The main Playwright configuration file, where global settings such as browser choices and test options are specified.
- **tests/**: Directory containing all the test files, categorized into two main subfolders:
  - **smoke/**: Contains the critical path tests that verify essential functionalities.
  - **normal/**: Contains additional functional tests that cover other scenarios and edge cases.
- **pages/**: Directory containing Page Object Model classes. Each file (e.g., `loginPage.js`, `inventoryPage.js`) represents a web page in the application and encapsulates the logic for interacting with that page (e.g., filling out forms, clicking buttons). This reduces duplication and improves maintainability.

## Installation Guide

Follow these steps to set up the project on your local machine:

### 1.Prerequisites
- Node.js installed on your machine
- npm (Node Package Manager)


## Setup
1. Clone the repository to your local machine.
   bash
   git clone https://github.com/altanberkeren/SauceDemo.com-QATest.git
   cd SauceDemo.com-QATest

### How the Code Works

#### Playwright and JavaScript:
- All test scripts are written using JavaScript and leverage the **Playwright Test** library.
- Each test file (e.g., `advanced-search.spec.js`) imports the relevant **Page Object** classes and test methods from Playwright.

#### Page Object Model (POM):
- Each page file (ex., `cartPage.js`, `loginPage.js`) encapsulates locators and methods to interact with that page.
- Tests call these methods to keep the code consistent, maintainable, and easier to scale.

# Test Names and Descriptions

Below is a list of all **15 automated tests** in your Playwright project, categorized into **Smoke Tests** and **Normal Tests**, along with a one-sentence description for each:

## Smoke Tests (5)

1. **Login Smoke Test**
   - **Description:** Verifies that a user can successfully log in with valid credentials.

2. **Inventory Smoke Test**
   - **Description:** Ensures that the inventory page loads correctly and displays a list of products.

3. **Cart Smoke Test**
   - **Description:** Confirms that adding an item to the cart updates the cart count appropriately.

4. **Checkout Smoke Test**
   - **Description:** Validates that the basic checkout process completes successfully from adding items to order confirmation.

5. **Logout Smoke Test**
   - **Description:** Tests that a user can successfully log out from the application, returning to the login page.

## Normal Tests (10)

6. **Login Invalid Test**
   - **Description:** Checks that an error message is displayed when a user attempts to log in with incorrect credentials.

7. **Sort Products Test**
   - **Description:** Verifies that products can be sorted by price in ascending order and that the sorting behaves as expected.

8. **Product Details Test**
   - **Description:** Ensures that clicking on a product navigates to its detailed information page accurately.

9. **Cart Actions Test**
   - **Description:** Tests the functionality of adding and removing items in the shopping cart.

10. **Checkout Flow Test**
    - **Description:** Validates the complete checkout flow, including filling in user information and completing the purchase.

11. **Add Multiple Items Test**
    - **Description:** Confirms that multiple items can be added to the cart simultaneously and that the cart count reflects all additions.

12. **Remove Multiple Items Test**
    - **Description:** Ensures that multiple items can be removed from the cart and that the cart updates correctly after each removal.

13. **Menu Test**
    - **Description:** Verifies that the sidebar menu opens and displays all expected menu items such as "ALL ITEMS," "ABOUT," "LOGOUT," and "RESET APP STATE."

14. **About Page Test**
    - **Description:** Tests navigation to the About page via the sidebar menu and ensures the correct page loads.

15. **Performance Glitch User Test**
    - **Description:** Validates that a user experiencing performance issues can still log in and access the inventory page without errors.

---

These test names and descriptions provide a clear overview of each test's purpose, ensuring that all critical functionalities and additional features of the application are thoroughly validated.
## Running Tests

### Run All Tests 
    
    
    npx playwright test 

### Run All Tests (Headed Mode)
    
    
    npx playwright test --headed
    
### Run Tests for a Specific Browser
   
    
    npx playwright test --browser=YourBrowserOfChoice

### Run Smoke Tests Only (Headed Mode)


     npm run tests:smoke

### Run Regression Tests Only 


      npm run tests:normal


## Thank you

## Thank you so much for taking the time to review this project! 💖 We truly hope that the work reflects our effort and dedication. Every detail was crafted with care, and we’ve poured our passion into it. 🌟 Your feedback means the world to us, and we are excited to continue improving. 🙌 Looking forward to hearing your thoughts! 😊 I hope we will get 💯


