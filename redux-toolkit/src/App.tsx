import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@src/components/ErrorFallback'
import { Router } from '@src/components/Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './store'

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

