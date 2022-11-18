import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Toggle from './Toggle';
import { themeContext } from '../Context';
function Search() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate("/searched/" + input);
    }
  return (
    <>
        <VLink to="/my-recipe-app" style={darkMode ?{color: "white"}: {color: "black"}}>
          Delicious
        </VLink>

    <FormStyle onSubmit={handleSubmit}>
    <div>
        <FaSearch style={{color: "white"}}/>
     <input
     onChange={(e)=> setInput(e.target.value)}
     type="text" value={input} placeholder="Search Recipe Here"/>
    </div>
    </FormStyle>
    <Toggle/>

    </>
  )
}

const FormStyle = styled.form`
 margin: 0rem 20rem;
 position: absolute;
 top: 6rem;

@media screen and (max-width: 640px) {
    margin: 1rem 8rem;
}
@media screen and (max-width: 768px) {
  margin: 0rem 8rem;
}
@media screen and (max-width: 480px) {
  // grid-template-columns: repeat(2, 9rem);
  margin: 3rem 2rem;
}
div{
    position: relative;
    width: 100%; 
    // @media screen and (max-width: 640px) {
    //     width: 300px; 
    // }
}


input{
    border: none;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 50vw;
    background: linear-gradient(35deg, #494949, #313131);

    @media screen and (max-width: 640px) {
    width: 60vw; 
    }
    @media screen and (max-width: 480px) {
      width: 87vw; 
      }
}
svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%)
}
`
const VLink = styled(NavLink)`
  text-decoration: none;
  font-family: Cursive;
  font-size: 30px;
  font-weight: bolder;
  position: absolute;
  top: 3rem;
  left: 3rem;
  @media screen and (max-width: 640px) {
    left: 2rem;
  }
`;

export default Search

