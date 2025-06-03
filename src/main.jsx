import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';
import CreateAccountForm from './components/CreateAccountForm.jsx';
import NotFound from './components/NotFound.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main app component
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/create",
        element: <CreateAccountForm />,
      },
    ],
    errorElement: <NotFound />, // Component to render when no route matches (404 page)
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} /> 
  </StrictMode>,
)
