## Functional Requirements (FR) – CleanCity Waste Pickup Scheduler

### 1. User Form Submission
- Users can submit waste pickup requests via a form
- Form must include: Name, Address, Waste Type, Date, Time

### 2. Dashboard Data Display
- System displays a table of all user-submitted requests
- Users can filter by status and location

### 3. Feedback Mechanism
- Users can submit complaints or missed pickup feedback
- Feedback must include valid Request ID and feedback text

### 4. Status Management (Admin)
- Admins can update the status of requests
- Updated status should reflect in dashboard and persist via localStorage

### 5. Content Delivery (Awareness Page)
- Serve educational content and images about waste management practices

### 6. Client-side Data Storage
- All user data must be stored locally using localStorage
- Data should persist across refreshes and sessions unless manually cleared

### 7. Responsive Navigation
- Navigation should work across devices
- Includes links to Home, Dashboard, Feedback, Awareness, Admin
