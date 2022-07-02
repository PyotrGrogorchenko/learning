import { Router } from '@src/components/Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './store'
import { ErrorBoundary } from './components/ErrorBoundary'

export const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

