# WorkOS Customer Management Portal

As part of the WorkOS FE take home assignment, the Customer Management Portal renders different users and their corresponding roles to an administrator. The focus of this takehome was to match the figma designs and render data from the corresponding `server` backend.

## Tech Stack

- TypeScript
- React
- NextJS
- Radix Component Library

## Getting Started

1. **Clone down the repo**
2. **Start the Backend API**:
   - Ensure you have the latest version of Node.js.
   - Run the following commands to install dependencies and start the API:
     ```bash
     cd server
     npm install
     npm run api
     ```
3. **Start the Frontend**:
   ```bash
   - cd customer-service-portal
   - npm install
   - npm run dev
4. **View FE in browser**:
   - navigate to `http://localhost:3000/`

## Preview

https://github.com/user-attachments/assets/4c66a277-99e8-4264-88bd-980220c75302

## Future Features
There were many additional enhancements and features I would be excited to make in this codebase. In order of importance they are:
1. Testing for all components (Jest and Cypress)
2. Functionality on all buttons: Adding, updating and deleting users/roles
3. Table footer and pagination for users
4. Add fallback for avatar image of user's initials
5. Add routing: `/dashboard` as landing page, and then appending `/users` or `/roles`
