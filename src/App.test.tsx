import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Saw Sharpening Service in the Greater Phoenix, AZ Area/i)
  expect(linkElement).toBeInTheDocument()
})
