import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOne from './Layout/LayoutOne.jsx'
import Homepage from './Pages/Homepage.jsx'
import LayoutTwoAdmin from './Layout/LayoutTwoAdmin'
import VolunteersList from './AdminPages/VolunteersList'

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
    path: '/admin',
    element: <LayoutTwoAdmin></LayoutTwoAdmin>,
    children: [
      {
        path: '/admin/volunteers-list',
        element: <VolunteersList></VolunteersList>
      },
      {
        path: '/admin/add-event',
        element: <VolunteersList></VolunteersList>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
