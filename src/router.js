import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Create routes array with just the basic route
const routes = [
  {
    path: "/",
    element: <App />,
  },
  // Add your other routes here
];

// Standard configuration without basename for local development
const router = createBrowserRouter(routes);

export default router;
