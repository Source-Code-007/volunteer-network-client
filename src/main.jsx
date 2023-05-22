import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOne from './Layout/LayoutOne.jsx'
import VolunteersList from './AdminPages/VolunteersList'
import DashBoardLayout from './Layout/DashBoardLayout'
import AddEvent from './AdminPages/AddEvent'
import Homepage from './Pages/Homepage/Homepage'
import LayoutThree from './Layout/LayoutThree'
import RegVol from './Pages/RegVol/RegVol'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne></LayoutOne>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      }
    ]
  },

  {
    path: '/',
    element: <LayoutThree></LayoutThree>,
    children: [
      {
        path: '/register-volunteer/:id',
        element: <RegVol></RegVol>,
        loader: ({params}) => fetch(`http://localhost:2500/volunteer-opportunities/${params.id}`)
      }
    ]
  },

  {
    path: '/',
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: '/dashboard/volunteers-list',
        element: <VolunteersList></VolunteersList>
      },
      {
        path: '/dashboard/add-event',
        element: <AddEvent></AddEvent>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
