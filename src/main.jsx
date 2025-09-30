import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import Ranking from './pages/ranking.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Sobre from './pages/sobre.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/ranking",
    element: <Ranking></Ranking>
  },
  {
    path: '/sobre',
    element:<Sobre></Sobre>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

