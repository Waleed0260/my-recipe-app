import "./App.css";
import { BrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import {themeContext} from "./Context"
import { useContext } from "react";


const Search = lazy(() => import("./Components/Search"));
const Pages = lazy(() => import("./Pages/Pages"));
const Category = lazy(() => import("./Components/Category"));
const Spinner = lazy(() => import("./Spinner"));
const Footer = lazy(() => import("./Components/Footer"));


function App() {
  const theme  = useContext(themeContext);
  const darkMode  = theme.state.darkMode;




  return (
    <div style={darkMode ?{backgroundColor: "#282c34"}: {backgroundColor: "rgb(236, 213, 213)"}}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Search />
          <Category />
          <Pages />
          <Footer />
        </Suspense>
      </BrowserRouter>
      </div>
  );
}

export default App;

//<h1 style={{color: "white", display: "flex", justifyContent: "center", alignItems: "center"}} >Loading...</h1>
