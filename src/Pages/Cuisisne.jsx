import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import {themeContext} from "../Context"
import { useContext } from "react";

function Cuisisne(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  const [cuisine, setCuisine] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  let params = useParams();



  
const getCuisine = async(name)=>{
    setLoading(true);
    props.setProgress(30);
      const url= `https://api.spoonacular.com/recipes/complexSearch?apiKey=2777352d167849208b58bd3897cbed6e&cuisine=${name}&number=21`
      props.setProgress(70);
      const response = await fetch(url);
      const resJson = await response.json();
      props.setProgress(100);
      setLoading(false);
      setCuisine(resJson.results);
  }
  useEffect(()=>{
    getCuisine(params.type);
      console.log(params.type);
  }, [params.type])


 
  return (


    <Grid>


        {loading ? (
          <h1 style={darkMode ?{color: "white"}: {color: "black"}}>Loading...</h1>
        ): (
          <>
            {cuisine.map((item)=>{
            return(
                <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                <img  src={item.image ? item.image : "https://spoonacular.com/recipeImages/715514-556x370.jpg"} alt="" />

                <h4 style={darkMode ?{color: "white"}: {color: "black"}}
                >{item.title ? item.title.slice(0, 23) : ""}</h4>
                </Link>
                </Card>
            )
        })}
        </>
        )}
        </Grid>

  )
}

const Grid = styled.div`
display: Grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 3rem;
margin: 12rem 8rem;
@media screen and (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
  margin: 13rem 2rem;
}
@media screen and (max-width: 480px) {
  margin: 15rem 2rem;
}

`
const Card = styled.div`

img{
  width: 100%;
  border-radius: 2rem;
}
a{
  text-decoration: none;
}
h4{
  text-align: center;
  padding: 1rem;
  color: white;
}
`


export default Cuisisne



// 2777352d167849208b58bd3897cbed6e