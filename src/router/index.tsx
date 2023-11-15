import React from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import { Home } from '../pages'
import { PublicLayout } from '../components'

export const publicRoutes: Array<RouteObject & { title: string }> = [
  { path: '/', title: 'Home', element: <Home /> },
  { path: '/band-saw-blades', title: 'Band Saw Blades', element: <Home /> },
  { path: '/metal-cutting-blades', title: 'Metal Cutting Blades', element: <Home /> },
  { path: '/sharpening', title: 'Sharpening', element: <Home /> },
  { path: '/vendors', title: 'Vendors', element: <Home /> },
  { path: '/contact', title: 'Contact', element: <Home /> }
]

export const router = createBrowserRouter([
  { element: <PublicLayout />, children: publicRoutes }
])
