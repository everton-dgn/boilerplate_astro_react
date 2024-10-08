import type { ReactNode } from 'react'

import { render, type RenderResult } from '@testing-library/react'
import { MainProvider } from 'components/providers/MainProvider'

export const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProvider>{children}</MainProvider>)
