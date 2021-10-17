import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../index'

describe('Button', () => {
  it('should render children', () => {
    render(<Button>Button Component</Button>)
    expect(screen.getByText('Button Component')).toBeInTheDocument()
  })

  it('should hide icon by default', () => {
    render(<Button>Button Component</Button>)
    expect(screen.queryByTestId('btnIcon')).not.toBeInTheDocument()
  })

  it('should render icon when icon provided', async () => {
    render(<Button icon="/sample.svg">Button Component</Button>)
    expect(await screen.findByTestId('btnIcon')).toBeInTheDocument()
  })
})