import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Esqueceu from './components/esqueceu.tsx'
import Cadastrar from './components/cadastrar.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

/* Exemplo 1 */
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "cadastrar", element: <Cadastrar /> },
  { path: "esqueceuSenha", element: <Esqueceu /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
