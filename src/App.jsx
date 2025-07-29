import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Paste from './Components/Paste'
import Home from './Components/Home'
import Viewpaste from './Components/Viewpaste'
import {Toaster} from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)
  const routes=createBrowserRouter([
    {
      path:'/',
      element: <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:'/paste',
      element: <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:'/paste/:id',
      element: <div>
        <Navbar/>
        <Viewpaste/>
      </div>
    }
  ])
  return (
    <div>
      <RouterProvider router={routes}/>
      <Toaster/>
    </div>
  )
}

export default App
