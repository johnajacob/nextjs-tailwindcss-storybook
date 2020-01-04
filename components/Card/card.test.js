/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'

import Card from './card'

describe('With React Testing Library', () => {
  it('Shows Card Component', () => {
    const { getByText } = render(<Card />)

    expect(getByText('This is a title')).not.toBeNull()
  })
})

describe('With React Testing Library Snapshot', () => {
  it('Should match Snapshot', () => {
    const { asFragment } = render(<Card />)

    expect(asFragment()).toMatchSnapshot()
  })
})
