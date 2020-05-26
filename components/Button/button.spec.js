import React from 'react'
import { render } from '@testing-library/react'
import Index from '../../pages/index'

test('renders button', () => {
  const { getByText } = render(<Index />)
  const linkElement = getByText(/Click me/)
  expect(linkElement).toBeInTheDocument()
})
