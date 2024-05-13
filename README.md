# final-project2-

Thinking Tester Contact List Test Plan
Introduction

This test plan outlines the approach for testing the Thinking Tester Contact List web application, available at https://thinking-tester-contact-list.herokuapp.com/. The purpose of this testing effort is to ensure the application functions as intended, provides a positive user experience, and handles potential errors gracefully.

Stakeholders

Testers
Developers
Project Manager
Test Objectives

Verify core functionalities of adding, editing, deleting, and viewing contacts.
Ensure proper user authentication and authorization mechanisms.
Test application behavior for invalid user input and edge cases.
Identify and report any bugs or defects in the application.
Confirm that UI elements function as expected and provide a clear and intuitive user experience.
Test Strategy

A combination of manual and automated testing will be employed to comprehensively evaluate the application:

Manual Testing:
Test cases will be executed manually to validate the app's functionality, usability, and compatibility across different devices and browsers.
Exploratory testing will be conducted to identify any unexpected behaviors.
Automated Testing:
Automation scripts will be developed using JavaScript to streamline repetitive tasks and ensure consistent testing throughout the development lifecycle.
API Testing:
Postman will be used to test the application's API endpoints for CRUD (Create, Read, Update, Delete) operations on contacts.
This will ensure data integrity and proper communication between the frontend and backend.
Performance Testing:
JMeter will be used to simulate user load and assess the application's performance under various traffic conditions.
This will help identify potential bottlenecks and ensure the application scales effectively.
Compatibility Testing:
The app will be tested on different devices (desktop, mobile, tablet) and browsers (Chrome, Firefox, Safari, Edge) to ensure consistent rendering and functionality across different platforms.

A comprehensive test case document outlining each test scenario, including expected results and pass/fail criteria.
Detailed test execution logs documenting the steps taken and the results obtained.
Defect reports for any bugs or issues identified during testing.
Test Schedule

This is a high-level estimated schedule. The actual duration may vary depending on the complexity of the application and the number of identified issues.

Week 1: Identify API endpoints, UI functions, and security testing considerations.
Week 2: Develop test cases for API and UI functionalities.
Week 3: Execute and document API test results.
Week 4: Execute and document UI test results.
Week 5: Analyze results, identify defects, report findings, and prepare a test summary report.


GitHub repository link
[https://thinking-tester-contact-list.herokuapp.com/](https://github.com/semous2006/final-project2-/tree/main)

Api testes 
cypress/e2e/Final-project2-.cy.js/API TESTING 

UI testes 
cypress/e2e/Final-project2-.cy.js/UI IESTING.cy.js

Security test 
.github/workflows/cypress-tests.yml

Non functional testing performed by Jmeter 
Please viset link below for results
![Screen Shot 2024-05-06 at 9 29 42 PM](https://github.com/semous2006/final-project2-/assets/151662132/52a6c23e-f4ce-4653-9055-ad7dd81106a6)
![Screen Shot 2024-05-06 at 9 15 56 PM](https://github.com/semous2006/final-project2-/assets/151662132/96d434b0-a003-4ac7-aa6a-8888ba9864a4)


