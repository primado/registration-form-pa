// import React from 'react'
import ReactDOM from 'react-dom/client'
// import * as ReactDOM from "react-dom";
import App from './App.jsx'
import Success from "./component/Success.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
  {
    path: "/success",
    element: <Success />,
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
