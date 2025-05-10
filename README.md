# Printers Project

A React application for managing printers.

## Getting Started

These instructions will help you set up the project for local development and deployment.

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Git

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/corbfon/printers.git
   cd printers
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

   The application will open in your browser at [http://localhost:3000](http://localhost:3000)

## Development

- Edit React components in the `src` directory
- Changes will automatically reload in the browser
- Run tests with `npm test` or `yarn test`

## Deployment

This project is configured to deploy to GitHub Pages.

1. Make sure your changes are committed and pushed to the repository
2. Run the deploy command:

   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

3. Your application will be deployed to: [https://corbfon.github.io/printers](https://corbfon.github.io/printers)

## Project Structure

```
printers/
├── public/          # Static files
├── src/             # React components and logic
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

## Built With

- [React](https://reactjs.org/) - The web framework used
- [React Router](https://reactrouter.com/) - For routing
- [GitHub Pages](https://pages.github.com/) - For deployment
