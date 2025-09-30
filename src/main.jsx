import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './pages/inicio.jsx'
import Ranking from './pages/ranking.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Sobre from './pages/sobre.jsx'
import Escolha from './pages/escolha.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio></Inicio>
  },
  {
    path: "/ranking",
    element: <Ranking></Ranking>
  },
  {
    path: "/sobre",
    element:<Sobre></Sobre>
  },
  {
    path: "/escolha",
    element: <Escolha></Escolha>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

