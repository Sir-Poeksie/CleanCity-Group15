# Test Strategy Document

**Project:** CleanCity - Waste Pickup Scheduler  
**Version:** 1.0  
**Author:** Mpumelelo Theophilas Nxazonke [Sir-Poeksie]  
**Date:** 2025-07-08  

---

## 1. Objective

To define the strategy for testing the CleanCity Web Application, ensuring that both **functional** and **non-functional** requirements are met. The strategy outlined below defines the *scope*, *tools*, *techniques*, and *approach* that will be followed to validate the quality of the software.

---

## 2. Scope of Testing

| **In Scope**                                                                 | **Out of Scope**                        |
|------------------------------------------------------------------------------|------------------------------------------|
| User registration and login functionality                                   | Backend/API integration (no backend)     |
| Waste pickup request creation and cancellation                              | Payment gateway or notifications via SMS |
| Role-based access for Admin/User                                            | Backend database persistence             |
| Admin panel controls and filtering                                          | Server load balancing                    |
| Dashboard charts, analytics, and reports                                    | Server-side encryption                   |
| Community post creation and feedback forms                                  | Multilingual support                     |

---

## 3. Tools & Frameworks

| **Tool**      | **Purpose**                                  |
|---------------|----------------------------------------------|
| **Jest**      | Unit testing of pure logic modules           |
| **Cypress**   | End-to-end UI testing of user workflows      |
| **Selenium**  | Cross-browser functional automation          |
| **JMeter**    | Load and performance testing (simulated users) |

---

## 4. Testing Types & Levels

### 4.1 Testing Levels

| Level         | Purpose                                           |
|---------------|---------------------------------------------------|
| Unit          | Test logic functions (e.g., request validation)   |
| Integration   | Test flows between modules (login → dashboard)    |
| System        | Validate full workflows end-to-end                |
| Acceptance    | Final user-level checks vs. functional requirements |

---

### 4.2 Testing Types

| Type                 | Description                                                   |
|----------------------|---------------------------------------------------------------|
| Functional Testing   | Validate that each function works as specified                |
| Regression Testing   | Retest after bug fixes to ensure stability                    |
| Exploratory Testing  | Manual free-flow testing to find unexpected issues            |
| Performance Testing  | Measure response time and stability under load (JMeter)       |
| UI Testing           | Test layout, responsiveness, and element visibility           |
| Security (Limited)   | Validate client-side sanitization & input handling            |

---

## 5. Test Techniques

| Technique               | Applied To                                              |
|-------------------------|----------------------------------------------------------|
| **Black-Box Testing**   | UI flows (form validation, user flows, dashboards)       |
| **White-Box Testing**   | Logic within services (e.g., dataService.js using Jest)  |
| **Equivalence Partitioning** | Pickup form input validation                         |
| **Boundary Value Analysis** | Date selection, text length, max pickups per week     |
| **Decision Table**      | Admin actions: approve/reject/edit requests              |
| **Risk-Based Testing**  | Focus on critical logic (request scheduling, role access) |

---

## 6. Entry & Exit Criteria

### Entry Criteria

- The React application is available via `npm start`
- All required pages/components are implemented
- Test data is available in localStorage or JSON mock
- Team access to GitHub repo & testing environments is confirmed

### Exit Criteria

- All high-priority test cases have passed
- No critical or blocker bugs remain unresolved
- Defect density is within acceptable limits (<10%)
- Final test report has been submitted

---

## 7. Schedule & Test Cycles

| **Phase**                  | **Timeline**         | **Deliverables**                          |
|----------------------------|----------------------|--------------------------------------------|
| Requirement Analysis       | 26–28 June 2025      | App_Requirements.md, Risk_Analysis.md      |
| Strategy & Planning        | 29–30 June 2025      | Test_Strategy.md, Test_Plan.md             |
| Test Design                | 01–02 July 2025      | Test_Cases.md, Traceability_Matrix.md      |
| Test Execution             | 03–06 July 2025      | Bug Reports, Test_Execution_Report.md      |
| Final Review & Submission  | 07–08 July 2025      | Test_Report_Summary.md, Final Reflection   |

---

## 8. Automation Strategy

Due to tight timelines and the repetitive nature of the core flows, automation will be used for:

- Form submissions (Cypress)
- Input validation (Jest + Cypress)
- Admin flows: status updates, table filters (Cypress)
- Page load times and performance under stress (JMeter)
- Cross-browser flow validation (Selenium)

Manual tests will still be applied to:

- Visual layout
- Accessibility
- Mobile responsiveness
- Exploratory edge cases

---

## 9. Risk-Based Areas of Focus

| Area                      | Rationale                          |
|---------------------------|------------------------------------|
| Request Form Validation   | Frequent user interaction; fragile |
| Admin Role Access         | High-impact functionality          |
| Dashboard Stats           | Data correctness risk              |
| Scheduling Logic          | High dependency on input accuracy  |
| localStorage Management   | Susceptible to data loss/corruption|

---

## 10. Roles & Responsibilities

| **Tester**          | **Responsibilities**                                  |
|---------------------|--------------------------------------------------------|
| @Sir-Poeksie        | Team Lead, Test Strategy, Test Plan, Risk Analysis     |
| @Himothy58          | Test Case Design, Exploratory Testing                  |
| @DAN-HASSAN-INNOVATIONS | App Requirements, Traceability Matrix             |

---

## 11. Deliverables

- `SRS.md`
- `Risk_Analysis.md`
- `Test_Strategy.md` (this doc)
- `Test_Plan.md`
- `Test_Cases.md`
- `Traceability_Matrix.md`
- `Test_Execution_Report.md`
- `Final_Test_Report.md`
- GitHub Issues for all defects
- Screenshots of failed cases
- Reflections and Review notes

---

## Review & Execution Context

> *Note:* Due to unforeseen team participation challenges and lack of communication from assigned members, this strategy has been prepared and finalized by the QA Team Lead.

While the original intention was to collaboratively review and agree on the strategy via GitHub Discussions, consistent delays and lack of engagement have necessitated independent completion of this document and related deliverables.

All testing will proceed based on this defined strategy unless future collaboration resumes in time to impact execution.

**Lead QA Tester:**  
Name: *Mpumelelo Theophilas Nxazonke (@Sir-Poeksie)*  
Date Finalized: *2025-07-08*
