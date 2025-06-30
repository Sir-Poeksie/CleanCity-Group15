issue 8
# CleanCity – Extended Risk Summary (Manual & Automation-Oriented)

Combining data from exploratory test cases, manual bugs, and automated potential, we identify the following critical risk zones in the app:

---

## 🚧 1. Form Validation (Pickup + Feedback Forms)
- **Observed Bug**: Missing error on required `Date` field
- **Potential Risk**: Users can submit incomplete forms
- **Implication**: Garbage data → scheduling conflicts or failed pickups
- **Testing Needs**: Regression + Boundary Testing
- **Priority**: High

---

## 🔍 2. Filtering Logic (Dashboard)
- **Observed Bug**: Filter by "Eldoret" returns Nairobi data
- **Potential Risk**: Logic failure or improper state update
- **Implication**: Trust loss, operational misrouting
- **Testing Needs**: Black-box functional tests, integration validation
- **Priority**: High

---

## ♿ 3. Accessibility Deficiency (`/awareness` page)
- **Observed Bug**: All images missing alt-text
- **Potential Risk**: App becomes unusable for visually impaired users
- **Implication**: Accessibility violations, user exclusion
- **Testing Needs**: Manual screen reader audits, WCAG checks
- **Priority**: Medium

---

## 🌀 4. Admin Panel - UI/State Desync
- **Observed Bug**: Status update doesn’t refresh UI
- **Potential Risk**: localStorage sync failure
- **Implication**: Admin sees stale data, erroneous task management
- **Testing Needs**: UI state test, mock localStorage failures
- **Priority**: High

---

## 📏 5. Boundary Handling (All Forms)
- **Observed Bug**: Long text breaks layout
- **Potential Risk**: Unhandled input overflows
- **Implication**: Crashed UI, invalid data entries
- **Testing Needs**: Edge case automation, fuzzing inputs
- **Priority**: Medium

---

## 🌍 6. Mobile Responsiveness
- **Observed Risk**: No test failure yet, but multiple layout elements at risk
- **Potential Risk**: Overlapping buttons, broken grid stacking
- **Implication**: Poor UX on small screens
- **Testing Needs**: Manual mobile walkthroughs, cross-device snapshots
- **Priority**: Medium

---

## 🔐 7. Data Integrity & Persistence
- **Observed Risk**: localStorage-only persistence strategy
- **Potential Risk**: Total data loss from user action (clear cache, incognito)
- **Implication**: Lack of recoverability, inconsistent state
- **Testing Needs**: Data flush simulations, resilience tests
- **Priority**: Medium
