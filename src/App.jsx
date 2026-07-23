import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Works from './pages/Works'
import ProjectFilter from './pages/ProjectFilter'
import Studio from './pages/Studio'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/works",
      element: <Works />
    },
    {
      path: "/works/:projId",
      element: <ProjectFilter />
    },
    {
      path: "/studio",
      element: <Studio />
    }
  ])

  return (
    <>
        <RouterProvider router={router}>

        </RouterProvider>
    </>
  )
}

export default App
