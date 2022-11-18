import {ErrorBoundary} from 'react-error-boundary'
import { themeContext } from './Context';
import { useContext } from 'react';


function ErrorFallback({error, resetErrorBoundary}) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div role="alert" style={darkMode ? {color: "white", marginTop: "210px", marginBottom: "20px"}: {color: "black", marginTop: "210px", marginBottom: "20px"}}>
      <p>Something went wrong:</p>
      <pre>{error.message} API limit exceeded please try after some time</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}




export default ErrorFallback


