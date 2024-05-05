import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Components/body/Home.jsx'
import Aboutus from './Components/body/Aboutus.jsx'
import Contact from './Components/body/Contact.jsx'
import Skills from './Components/body/Skills.jsx'
import Eduction from './Components/body/Eduction.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path: "Contact",
      element : <Contact/>
    },
    {
      path:"Aboutus",
      element : <Aboutus/>
    },
    {
      path:"Skills",
      element:<Skills/>
    },
    {
      path:"Project",
      element:<Eduction/>
    }



  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
