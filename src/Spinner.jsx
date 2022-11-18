import React from 'react'
import loading from "./loading.gif"
const Spinner=()=> {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={loading} alt=""/>
      </div>
    )
}

export default Spinner
