import React from "react";
// import { SLink to={"/cuisine/italian"} } from "react-router-dom"
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopSticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { themeContext } from '../Context';
import { useContext } from 'react';


function Category() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <Cate>
        <SLink to={"/cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italians</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
          <GiNoodles />
          <h4>Japanese</h4>
        </SLink>
      </Cate>
    </>
  );
}

const Cate = styled.div`
  display: flex;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 9rem);
  position: relative;
  top: 11rem;
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 9rem);
    top: 12rem;

  }
  @media screen and (max-width: 480px) {
    top: 13rem;
  }
`;



const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
