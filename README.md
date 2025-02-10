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

## Learnings
_NextJS_
Initially, I was very excited to create my first small-scale NextJS app. In hindsight, if I were to do this takehome again, I would stick with vanilla ReactJS. 
The biggest feature I was excited about with NextJS was the server side components and increased performance, especially considering the speed variants as factors in this project. _But then._ Due to the toggle interaction on the table, my main component where I did the BE queries needed to be a client-rendered component, thus negating the benefit of NextJS' server-side rendering. I was a few hours in at this point so continued down this path, but it also later caused environment issues with setting up Jest. All in all, a simpler, lighterweight solution would have been more appropriate for this exercise. The more you know!

_PRs_
Users are unable to review and merge their own PRs on GitHub. Initially, I started development using a typical feature branch approach, but opted for committing straight to main after learning that PRs were not merge-able. I believe thorough PRs are a crucial documentation step, however, so I wanted to note that this is an aytpical development pattern for me.
