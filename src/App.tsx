import { Suspense } from 'react'
import MessageComponent from './components/MessageComponents'

const App = () => {

  return (
    <div>
      <h1>Users List</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <MessageComponent />
      </Suspense>
    </div>
  )
}

export default App
