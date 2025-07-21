import { Suspense } from 'react'
import MessageComponent from './components/MessageComponents'
import AppErrorBoundary from './components/ErrorBoundary'

const App = () => {

  return (
    <div>
      <h1>Users List</h1>
      <AppErrorBoundary>
        <Suspense fallback={<h2>Loading...</h2>}>
          <MessageComponent />
        </Suspense>
      </AppErrorBoundary>
    </div>
  )
}

export default App
