## Cypress E-commerce Automation Project

This project is a **test automation suite built with the Cypress framework** for a demo e-commerce website. It validates the most important user interactions on a webshop — from login to checkout and logout.
All tests simulate real-life usage of the website and ensure that key functionalities remain stable and bug-free across updates.

---

##  Features Covered
### Login with valid credentials
Tests the basic login functionality to ensure authorized users can access their accounts reliably.

### Product search and add to cart
Validates the search bar functionality and confirms that selected products are correctly added to the shopping cart.

### Cart and checkout flow
Covers the complete purchase workflow — validating each step of the checkout to ensure the site responds as expected under typical user actions.

### Logout process
Ensures users can log out safely and that their session is properly cleared from the system.

### Positive Tests
- Successful login with a valid email and password.

#### Negative Tests(newly added)
The negative tests check that the login form works correctly when wrong or empty data is used. They make sure that users can't log in with invalid info and that error messages are shown as expected.
- One of the negative tests includes typing into a disabled input field using the `{ force: true }` option, to simulate unexpected user behavior and ensure proper validation.


---

## How to Run

Make sure you have Node.js and Cypress installed. Then:

```bash
npx cypress open
```

The Cypress test runner will open. You can run tests individually from the GUI, or use:

```bash
npx cypress run

```

## Idea / Workflow

This project was built to simulate how a real user interacts with an e-commerce website — from logging in, to searching products, checking out, and logging out.I started by covering the main positive flows (valid login, cart, checkout), then added negative tests to check how the system reacts to invalid or unexpected input.
I used these tests to simulate edge cases and verify that the app displays proper error messages and blocks unwanted behavior.
The idea was to write clean, isolated tests that mirror real-world scenarios and help ensure the website is stable and secure.

----

###  What could have been improved?

Honestly, there’s always room for improvement. 
While the core user flow is fully tested, I could have added:

- ~~Negative test cases (e.g., invalid login attempts or broken flows)~~ – Implemented later with comprehensive coverage
- Tests for additional features like account creation or order history
- Some cleaner structure and refactoring
- Integration with GitHub Actions to automatically run tests on each push

_Last updated on July 19_



