import React, {Suspense, lazy, useState} from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import {
  Routes,
  Route} from "react-router-dom";

import ErrorFallback from "../ErrorBoundary";
import LoadingBar from 'react-top-loading-bar';

const Home = lazy(() => import('./Home'));
const Searched = lazy(() => import('./Searched'));
const Cuisisne = lazy(() => import('./Cuisisne'));
const Recipe = lazy(() => import('./Recipe'));
function Pages() {
  const[progress, setProgress] = useState(0);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense>
    <LoadingBar
        height={3}
        color='white'
        progress={progress}
      />
      <Routes>
        <Route path="/" element={<Home setProgress={setProgress}/>}/>
        <Route path="/my-recipe-app" element={<Home setProgress={setProgress}/>}/>
        <Route path="/cuisine/:type" element={<Cuisisne setProgress={setProgress}/>}/>
        <Route path="/searched/:search" element={<Searched setProgress={setProgress}/>}/>
        <Route path="/recipe/:name" element={<Recipe setProgress={setProgress}/>}/>
      </Routes>
      </Suspense>
      </ErrorBoundary>
      )
}

export default Pages
