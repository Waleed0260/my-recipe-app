import React, {useState} from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from "../ErrorBoundary"
import Popular from '../Components/Popular'
import Veggie from '../Components/Veggie'
import LoadingBar from 'react-top-loading-bar'
function Home() {
  const[progress, setProgress] = useState(100);
  return (
    <div>
          <LoadingBar
        height={3}
        color='white'
        progress={progress}
      />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Popular/>
      <Veggie/>
      </ErrorBoundary>
    </div>
  )
}

export default Home
