import React from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import { BandSawBlades, Contact, Home, MetalCuttingBlades, Sharpening, Vendors, PublicLayout } from '../components'

export const publicRoutes: Array<RouteObject & { title: string }> = [
  { path: '/', title: 'Home', element: <Home /> },
  { path: '/band-saw-blades', title: 'Band Saw Blades', element: <BandSawBlades /> },
  { path: '/metal-cutting-blades', title: 'Metal Cutting Blades', element: <MetalCuttingBlades /> },
  { path: '/sharpening', title: 'Sharpening', element: <Sharpening /> },
  { path: '/vendors', title: 'Vendors', element: <Vendors /> },
  { path: '/contact', title: 'Contact', element: <Contact /> }
]

export const router = createBrowserRouter([
  { element: <PublicLayout />, children: publicRoutes }
])
