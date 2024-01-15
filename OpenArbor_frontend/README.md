## The Chronicles of WebDev

Welcome to the README file for the The Chronicles of WebDev ! This web application is built using React, Tailwind CSS, and features user registration and login capabilities. Registered users can create and publish their own blog posts, making it an engaging platform for sharing thoughts, ideas, and experiences with the world.


- User Registration and Login: Users can sign up for an account or log in with their credentials. This ensures a personalized experience and allows users to access features such as creating and managing their own blog posts.

- Create and Publish Blog Posts: Registered users can create new blog posts, complete with text, images, and any other media they'd like to include. Once a blog post is ready, they can publish it for others to read.

- Responsive Design: The website is designed with a responsive layout to ensure it looks and functions well on various devices, from desktops to smartphones.

## Description

- This React application is built using [create-react-app](https://create-react-app.dev/).
- It uses [Tailwind CSS](https://tailwindcss.com/)
- The application is generated in JavaScript.

## Pre-requisites

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Running in dev environment

1.  `cd YOUR_APPLICATION`
2.  `npm install`
3.  `npm start`

## .env file

This file contains various environment variables that you can configure.

## Folder Structure

```
 .
 ├── package.json
 ├── postcss.config.js
 ├── public
 │   ├── assets
 │   │   └── images --------- All Project Images
 │   ├── favicon.ico
 │   ├── index.html
 │   ├── manifest.json
 │   └── robots.txt
 ├── README.md
 ├── src
 │   ├── App.jsx
 │   ├── assets
 │   │   └── fonts ---------- Project fonts
 │   ├── components --------- UI and Detected Common Components
 │   ├── constants ---------- Project constants, eg: string consts
 │   ├── hooks -------------- Helpful Hooks
 │   ├── index.jsx
 │   ├── pages -------------- All route pages
 │   ├── Routes.jsx ---------- Routing
 │   ├── styles
 │   │   ├── index.css ------ Other Global Styles
 │   │   └── tailwind.css --- Default Tailwind modules
 │   └── util
 │       └── index.jsx ------- Helpful utils
 └── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.jsx` is the JavaScript entry point.

You may create subdirectories inside src.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.

## Installing a Dependency

You can install any dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```

Alternatively you may use `yarn`:

```sh
yarn add react-router
```

