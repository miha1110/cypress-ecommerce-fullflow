## Cypress E-commerce Automation Project

This project is a **test automation suite built with the Cypress framework** for a demo e-commerce website. It validates the most important user interactions on a webshop — from login to checkout and logout.
All tests simulate real-life usage of the website and ensure that key functionalities remain stable and bug-free across updates.

---

##  Features Covered
### Login with valid credentials
Tests the basic login functionality to ensure authorized users can access their accounts reliably. The test enters a valid email and password, submits the login form, and checks for successful redirection or confirmation.

### Product search and add to cart
Validates the search bar functionality and confirms that selected products are correctly added to the shopping cart.

### Cart and checkout flow
Simulates the full purchase process, from adding items to the cart to completing the order, ensuring the website behaves correctly at each step. This helps verify that typical user actions during checkout are handled smoothly and without errors.

### Logout process
The test clicks on the logout button, confirms redirection to the login or homepage, and verifies that session data is no longer accessible.

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


---

## Idea / Workflow

I started this project with the goal of realistically simulating how a typical user interacts with an e-commerce website. I wanted to go through the full journey: logging in, browsing or searching for products, adding items to the cart, checking out, and finally logging out.
At first, I focused on the positive flows — the ideal scenarios where the user inputs correct data and everything works as expected. This helped me validate that the core functionalities were working smoothly.
After that, I added negative test cases to see how the system behaves when something goes wrong. For example: invalid login credentials, empty search results, trying to check out with an empty cart, or entering invalid payment info. These edge cases are important to check how well the app handles errors, and whether it displays proper messages or blocks unwanted behavior.
Throughout the process, my goal was to write clean, isolated test cases that reflect real-world user actions. This makes the test suite easier to maintain, while also giving confidence that the site behaves correctly under both normal and unexpected conditions. It’s a way to ensure the app is not only functional, but also stable and secure from a user's perspective.


---

##  What could have been improved?

Honestly, there’s always room for improvement. 
While the core user flow is fully tested, I could have added:

- ~~Negative test cases (e.g., invalid login attempts or broken flows)~~ – Implemented later with comprehensive coverage
- Tests for additional features like account creation or order history
- Some cleaner structure and refactoring
- Integration with GitHub Actions to automatically run tests on each push



