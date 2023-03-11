# Frontend Development for AlgoBeez

This is the frontend development for AlgoBeez, an algorithmic trading backtesting application.

![Home page](public/UserHome.png)
![Admin Dashboard page](public/AdminHome.png)
![My Strategies page](public/MyStrategies.png)

## Installation

1. Clone the repository: git clone https://github.com/chen-shujun23/Algotrading-Backtesting-Frontend
2. Install dependencies:

- Create a Vite project
- npm install
- npm i @alpacahq/alpaca-trade-api dayjs jsonwebtoken react react-dom react-icons react-router-dom recharts
- npm install -D tailwindcss autoprefixer postcss tailwindcss vite-plugin-node-polyfills

3. Start the development server: npm run dev
4. Open http://localhost:3000 or any other port that you have configured to view it in the browser.
5. Create a config file with the following configuration:

```javascript
const config = {
  APCA_BASE_URL: "https://data.alpaca.markets/v2",
  APCA_API_KEY: "yourAlpacaAPIKey",
  APCA_API_SECRET: "yourAlpacaAPISecret",
  BASE_URL: "http://127.0.0.1:5001",
};
```

## Usage

This repository should run concurrently with the backend server to retrieve data from the database and store user inputs in the database. You may clone the backend development repository from https://github.com/chen-shujun23/Algotrading-Backtesting-Backend

## Technologies

This project uses the following technologies:

- HTML, CSS, Javascript
- TailwindCSS: a utility-first CSS framework
- **P**ostgresSQL: a SQL database used to store and retrieve data
- **E**xpress: a backend web framework for Node.js
- **R**eact: a frontend JavaScript library for building user interfaces
- **N**ode.js: a JavaScript runtime environment for server-side development

## Hierarchy

![Hierarchy](public/Hierarchy.png)

## Frontend Approach

## Unsolved Problems & Further Work

- Include more form types for different types of trading strategies
- Complete Discover and Search Results page

## References

- All images are downloaded from [Canva](https://www.canva.com/).
