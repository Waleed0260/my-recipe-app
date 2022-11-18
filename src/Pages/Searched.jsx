import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { themeContext } from '../Context';
import { useContext } from 'react';


function Searched(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  const [searched, setSearched] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null)



  let params = useParams();




 const getSearched = async(name)=>{
  setLoading(true);
      props.setProgress(30);
      const url= `https://api.spoonacular.com/recipes/complexSearch?apiKey=2777352d167849208b58bd3897cbed6e&query=${name}&number=15`
      props.setProgress(70)
      const response = await fetch(url);
      const resJson = await response.json();
      props.setProgress(100);
      setLoading(false);
      setSearched(resJson.results);
  }
  useEffect(()=>{
    getSearched(params.search);
  }, [params.search])


  return (
    <Grid>
      {/* {error && <h3 style={darkMode ?{color: "white"}: {color: "black"}}> {error}</h3>} */}

    {loading ? (
      <h1 style={darkMode ?{color: "white"}: {color: "black"}}>Loading...</h1>
    ): (
        <>
      {searched.map((item)=>{
          return(
              <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
              <img  src={item.image ? item.image : "https://spoonacular.com/recipeImages/715514-556x370.jpg"} alt="" />
              <h3 style={darkMode ?{color: "white"}: {color: "black"}}
              >{item.title ? item.title.slice(0, 23) : ""}</h3>
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
h3{
  text-align: center;
  padding: 1rem;
}
`

export default Searched
