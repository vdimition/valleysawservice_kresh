import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../pages'
import { PublicLayout } from '../components'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Home /> }
    ]
  }

])
