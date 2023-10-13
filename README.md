# With Bloom v1

WithBloom is a startup that helps people discover new coins and their market rates.

## Table of contents

<!--toc:start-->

- [With Bloom v1](#with-bloom-v1)
- [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Project structure](#project-structure)
  - [User story](#user-story)
  - [Author](#author)
  - [🔗 Links](#🔗-links)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Appendix](#appendix)
  <!--toc:end-->

## Installation

- clone repo

  ```bash
      git clone https://github.com/AdamuAbba/with-bloom.git
  ```

- install dependencies

  ```bash
      npm install
  ```

- run test

  ```bash
      npm run test
  ```

- run build

  ```bash
     npm run build
  ```

## Project structure

- Authentication Route
  - Login Screen
  - Signup Screen
- Dashboard Route
  - Coin List Screen
  - Exchange rate calculator Screen

<img src="./demo/login.png"  width="130" height="270"> <img src="./demo/404_mobile.png"  width="130" height="270"> <img src="./demo/signup_mobile.png"  width="130" height="270"> <img src="./demo/dashboard_desktop.png"  width="130" height="270">

## User story

- A user registers and signs in with [firebase Authentication](https://firebase.google.com/),
  - A new users data is saved to [firebase Firestore](https://firebase.google.com/).
- Access to the `Dashboard Route` is granted. -Here, a user proceeds to view available coins or use the exchange rate calculator
- A user signs out with the `Exit` button on the top right corner of the **`Coin List Screen`**

## Author

- [Abba Adamu](https://github.com/AdamuAbba)

## 🔗 Links

<a href="https://www.facebook.com/izshytypes" target="_blank">
<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="facebook" />
</a>
<a href="https://www.instagram.com/shytypes1028/" target="_blank">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram" />
</a>
<a href="https://twitter.com/shytypes1028">
<img alt="twitter" src="https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" />
</a>
<a href="https://abbaportfolio.netlify.app/"  target="_blank">
<img alt="portfolio" src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white" />
</a>
<a href="https://www.linkedin.com/in/abba-adamu-365a9b17a/">
<img alt="linkedIn" src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

## Features

- Basic design
- Form state handling with [React Hook Form](https://react-hook-form.com)
- Basic form validation with [zod validation](https://zod.dev/)
- [firebase Authentication](https://firebase.google.com/)
- [firebase Firestore to store user credentials](https://firebase.google.com/)
- **API url is embeded within app using environment variables**
- [Redux toolkit](https://redux-toolkit.js.org) state management

## Tech Stack

**Client:** ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

**Server:** ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

**Host:** ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

- build and deployment process is triggered by netlify bots from `main` branch

## Appendix

**Implementation summary:**

- RTKQuery for api access layer, http request and data caching
- Each component is modularized for optimal testing and development

```bash
Component "folder level"
│   Component.test.tsx
│   Component.tsx
│   index.tsx

```

- all firebase implementations can be monitored from the Google developer console.
