import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { themeContext } from '../Context';
import { useContext } from 'react';

function Recipe(props) {
    const[recipe, setRecipe] = useState({});
    const[activeTab, setActiveTab] = useState("instructions");
    const[loading, setLoading] = useState(true);
    let params = useParams();
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


const getrecipe = async()=>{
        props.setProgress(30);
        setLoading(true);
        const url= `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=2777352d167849208b58bd3897cbed6e`
        props.setProgress(70);
        const response = await fetch(url);
        const Detail = await response.json();
        props.setProgress(100);
        setLoading(false);
        setRecipe(Detail);
    }
    useEffect(()=>{
        getrecipe();
    }, [params.name])

  return (
    <Detailwrapper>
        {loading ? (
            <h1 style={darkMode ?{color: "white"}: {color: "black"}}>LOADING...</h1>
        ): (
            <>
            <div>
            <h2  style={darkMode ?{color: "white"}: {color: "black"}}>{recipe.title}</h2>
            <img src={recipe.image} alt="" />
          </div>
          <Info>
              <Button className={activeTab === 'instructions' ? 'active': ""}  onClick={()=> setActiveTab("instructions")} style={darkMode ?{color: "white"}: {color: "black"}}> Instructions </Button>
              <Button className={activeTab === 'ingredients' ? 'active': ""} onClick={()=> setActiveTab("ingredients")} style={darkMode ?{color: "white"}: {color: "black"}}> Ingredients </Button>
          {activeTab === 'instructions' && (
                 <div>
                 <p style={darkMode ?{color: "white"}: {color: "black"}}>{recipe.instructions}</p>
             </div> 
          )}
          {activeTab === 'ingredients' &&(
          <ul>
          {recipe.extendedIngredients.map((ingredients)=>(
              <li key={ingredients.id} style={darkMode ?{color: "white"}: {color: "black"}}>{ingredients.original}</li>
          ))}
      </ul>
          )}
          </Info>
          </>
        )}

        
    </Detailwrapper>
  )
}

const Detailwrapper = styled.div`
margin-top: 12rem;
margin-bottom: 5rem;
display: flex;
flex-direction: row;
margin-left: 20px;
@media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 14rem;
  }
  @media screen and (max-width: 480px) {
    margin-top: 14rem;
  }
.active{
    background: linear-gradient(to right, #f27121, #e94057);
    color: white;
    border: none;
    border: 2px solid black;

}
h2{
    margin-bottom: 2rem;
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
    width: 35vw;
    font-weight: 600;
    @media screen and (max-width: 768px) {
        width: 60vw;
      }
}
ul{
    margin-top: 2rem;
}
p{
    font-weight: 600;
    width: 35vw;
    margin-top: 20px;
    @media screen and (max-width: 768px) {
        width: 70vw;
    }
}
img{
    width: 50vw;
    border-radius: 20px;
    @media screen and (max-width: 768px) {
        width: 90vw;
      }
}
`
const Button = styled.button`
padding: 1rem 1.5rem;
background: transparent;
border: 2px solid black;
margin-right: 1rem;
@media screen and (max-width: 768px) {
    margin-right: 3rem;
}
@media screen and (max-width: 480px) {
    // margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem 1.2rem;
  }
font-weight: 600;
cursor: pointer;
`
const Info = styled.div`
margin-left: 3rem;
@media screen and (max-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 1rem;
  }
`

export default Recipe
