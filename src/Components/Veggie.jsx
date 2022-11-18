import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components'
import { useEffect } from 'react';
import { useState } from 'react';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { themeContext } from '../Context';
import { useContext } from 'react';
import UpdatedComponent from './HOC';



function Veggie({popular, error}) {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  
  return (
          <Wrapper>
        <h2 style={darkMode?{textAlign: "center", color: "white" }: {textAlign: "center", color: "black"}}>Random Picks</h2>
        {error && <h3 style={darkMode?{color: "white"}: {color: "black"}}> {error}</h3>}
            <Splide
        options={{
            type: "loop",
            autoplay: "pause",
            breakpoints: {
                1024: {
                    perPage: 4,
                },
                768: {
                    perPage: 3,
                },
                580: {
                    perPage: 2,
                }
            },
            perPage: 4,
            pagination: true,
            arrows: false,
            drag: "free",
            gap: "5rem"
       }}
        >
        {popular.map((item)=>{
            return(
                <SplideSlide  key={item.id}>
                <Card>
                <Link to={"/recipe/" + item.id}>
                <p
                style={{position: "absolute", zIndex: "10", left: "50%", bottom: "0", transform: "translate(-50%, 0%)", color: "white", width: "100%", textAlign: "center", fontWeight: "600", fontSize: "1rem", height: "40%", display: "flex", justifyContent: "center", alignItems: "center"}}
                >{item.title ? item.title.slice(0, 23) : ""}</p>
                <img  src={item.image ? item.image : "https://spoonacular.com/recipeImages/715514-556x370.jpg"} alt="" />
                <Gradient/>
                </Link>
                </Card>
                </SplideSlide>
            )
        })}
        </Splide>
        
    </Wrapper>


  )
}


const Wrapper = styled.div`
margin: 2rem 4rem;
margin-top: -6rem;
@media screen and (max-width: 640px) {
    margin: 2rem 0rem;
    margin-top: -8rem;

}
`;
const Card = styled.div`
min-height: 1rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
cursor: pointer;
margin: 2rem 0rem;

img{
    border-radius: 1rem;
    // position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 420px) {
        width: 100%;
    }
}

`;
const Gradient = styled.div`
height: 100%;
z-index; 3;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))
`


export default UpdatedComponent(Veggie);
