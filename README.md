![Stack](https://img.shields.io/badge/Stack-React_|_TypeScript-149eca)
![License](https://img.shields.io/badge/License-MIT-green)

# Legit Users

User list with React & TypeScript.

## Demo

<p align="center">
  <img src="public/screenshots/screenshot.png" width="650px" alt="screenshot">
</p>
<h2 align="center">
  <a href="https://legitusers.netlify.app">👉 Demo</a>
</h2>

## About

The app fetches mock users from [reqres.in](https://reqres.in/) and displays them on a paginated list with several editing options.

## Features

- User List Page
- User Details Page
- User Creation Form
- Form input feedback and submission message
- Form can be expanded or collapsed
- Pagination
- For added users, a random profile picture is fetched from [randomuser.me](https://randomuser.me/)
- Favorite users by clicking on the heart icon when hovering on them
- Filter users by search or favorites
- Search looks for first name, last name or both. It is cases, symbols and spaces insensitive
- Filters can be combined, i.e. you can perform a search query on favorited users
- Responsive

## Tech Stack

- **UI Library:** React
- **Languages:** TypeScript, SCSS, HTML
- **Build Tool:** Vite
- **Deployment:** Netlify
- **Dependencies:**
  - react-router-dom: Routing
  - react-query: API fetching from reqres.in
  - react-paginate: User list pagination
  - react-hook-form: User form
  - MUI: Tooltip

## Run Locally

Clone the project

```bash
git clone https://github.com/amadeuio/legit.users
```

Go to the project directory

```bash
cd legit.users
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

## Acknowledgements

- Design inspo: [Legit.Health](https://legit.health/)
- [reqres.in](https://reqres.in/)
- [randomuser.me](https://randomuser.me/)
- [Google Icons](https://fonts.google.com/icons)
- [ChatGPT](https://chat.openai.com)

Shoutout to my code companions: Coffee & [Cozy Fireplace](https://www.youtube.com/watch?v=ze-TjhwceFE)

## License

[MIT](https://choosealicense.com/licenses/mit/)
