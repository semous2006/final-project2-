Test Plan for Contact List App

1. Introduction The purpose of this test plan is to outline the testing approach for the Contact List App. The app allows users to manage their contacts, including adding, editing, and deleting contacts.
2. Scope The testing will focus on verifying the functionality, usability, and performance of the Contact List App across different platforms and devices. It will cover both manual and automated testing approaches.
3. Test Objectives
•	Validate the functionality of adding, editing, and deleting contacts.
•	Ensure data integrity and security.
•	Verify the app's compatibility with various devices and browsers.
•	Assess the app's responsiveness and performance under different network conditions.
•	Evaluate the user interface for consistency and usability.
4. Test Strategy
•	Manual Testing: Test cases will be executed manually to validate the app's functionality, usability, and compatibility.
•	Automated Testing: Automation scripts will be developed using Selenium or similar tools to automate repetitive tests, such as regression testing and cross-browser testing.
•	Performance Testing: Tools like JMeter or LoadRunner will be used to simulate concurrent user interactions and assess the app's performance under load.
•	Compatibility Testing: The app will be tested on different devices (desktop, mobile, tablet) and browsers (Chrome, Firefox, Safari, Edge) to ensure compatibility.
7. Test Deliverables
•	Test Plan Document
•	Test Cases Document
•	Test Execution Reports
•	Defect Reports

Manual Testing Execution:
API Test Cases:
1.	Get Users Endpoint Test:
•	Objective: Verify that the endpoint returns a list of users.
•	Steps:
1.	Send a GET request to the /users endpoint.
2.	Check the response status code.
3.	Validate the response body contains a list of users.
•	Expected Results: The endpoint returns a list of users.
Results: Pass. The endpoint returned a list of users with the expected status code and user details.
2.	Add User Endpoint Test:
•	Objective: Verify that the endpoint successfully adds a new user.
•	Steps:
1.	Send a POST request to the /users’ endpoint with new user data.
2.	Check the response status code.
3.	Retrieve the added user details from the database.
•	Expected Results: The new user is added successfully.
Results: Pass. The endpoint added the new user with the expected status code, and the user details were found in the database.
UI Test Cases:
3.	Login Page Accessibility Test:
•	Objective: Ensure that the login page is accessible without errors.
•	Steps:
1.	Open the browser and navigate to the login page URL.
2.	Verify that the login page loads without errors.
•	Expected Results: The login page is accessible and displays correctly.
Results: Pass. The login page loaded without any errors.
4.	Login Functionality Test:
•	Objective: Confirm that users can log in successfully with valid credentials.
•	Steps:
1.	Enter valid credentials and click on the login button.
2.	Verify that the user is redirected to the dashboard page.
•	Expected Results: The user is logged in successfully.
Results: Pass. After entering valid credentials, the user was redirected to the dashboard page as expected.
Non-Functional Test Cases:
5.	Response Time Test:
•	Objective: Evaluate the application's response time under normal conditions.
•	Steps:
1.	Perform typical actions on the app.
2.	Measure the time taken for each action to complete.
•	Expected Results: The app's response time is within acceptable limits.
Results: Pass. The response time for all actions was within acceptable limits.
6.	Load Testing:
•	Objective: Assess the app's performance under high load conditions.
•	Steps:
1.	Simulate a large number of concurrent user interactions.
2.	Measure the app's response time and server performance.
•	Expected Results: The app maintains acceptable performance under high load.
Results: Pass. The app's performance remained stable even under high load conditions.
Security Test Cases:
7.	XSS Vulnerability Test:
•	Objective: Test for Cross-Site Scripting (XSS) vulnerabilities.
•	Steps:
1.	Inject XSS payloads into input fields.
2.	Verify that the XSS payloads are properly sanitized.
•	Expected Results: The app prevents XSS attacks by sanitizing input.
Results: Pass. The app successfully sanitized input and prevented XSS attacks.
8.	SQL Injection Vulnerability Test:
•	Objective: Test for SQL Injection vulnerabilities.
•	Steps:
1.	Inject SQL injection payloads into input fields.
2.	Verify that the app prevents SQL injection attacks.
•	Expected Results: The app prevents SQL injection attacks.
Results: Pass. The app prevented SQL injection attacks by properly sanitizing input.





Defect Logging:


1.	Defect #1: Missing Input Validation on Login Page
•	Description: The login page does not perform input validation for the username and password fields.
•	Severity Level: High
•	Steps to Reproduce:
1.	Navigate to the login page.
2.	Leave the username or password field blank.
3.	Attempt to log in by clicking the login button.
•	Observed Behavior: The system allows submission of empty username or password fields without displaying any error messages.
•	Impact: This defect poses a security risk as it allows users to log in with empty credentials, potentially bypassing authentication.
2.	Defect #2: Inconsistent Styling on Dashboard
•	Description: There is inconsistency in styling elements on the dashboard page.
•	Severity Level: Low
•	Steps to Reproduce:
1.	Log in to the application.
2.	Navigate to the dashboard page.
•	Observed Behavior: Some elements such as buttons and text fields have different font sizes and colors, leading to a visually inconsistent dashboard layout.
•	Impact: This defect affects the user experience and may give the impression of poor design quality, impacting user satisfaction.
3.	Defect #3: Broken Link on Help Page
•	Description: The help page contains a broken link to the FAQ section.
•	Severity Level: Medium
•	Steps to Reproduce:
1.	Navigate to the help page from the dashboard menu.
2.	Click on the "FAQ" link.
•	Observed Behavior: The link redirects to an error page or does not load any content.
•	Impact: Users cannot access the FAQ section, which may hinder their ability to find answers to common questions or troubleshoot issues.
4.	Defect #4: Incorrect Data Displayed in User Profile
•	Description: The user profile page displays incorrect data for certain fields.
•	Severity Level: Medium
•	Steps to Reproduce:
1.	Log in to the application.
2.	Navigate to the user profile page.
•	Observed Behavior: Some user details, such as email address or phone number, are displayed inaccurately or missing.
•	Impact: This defect may lead to misinformation or confusion for users relying on their profile information for account management purposes.


## GitHub Repository

The code for this project is hosted on GitHub. You can find the repository [[here](https://github.com/your-username/your-repository).
](https://github.com/semous2006/Final-project2)
