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

----

###  What could have been improved?

Honestly, there’s always room for improvement. 
While the core user flow is fully tested, I could have added:

- Negative test cases (e.g., invalid login attempts or broken flows)
- Tests for additional features like account creation or order history
- Some cleaner structure and refactoring
- Integration with GitHub Actions to automatically run tests on each push




