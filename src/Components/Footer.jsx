import React from 'react'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import styled from 'styled-components';


function Footer() {
  return (
    <Foot>
      <Heading>
        <h4>Designed by Muhammad Waleed Ahsan</h4>
      </Heading>
      <Icons>
        <a target="blank" href="https://www.facebook.com/chaudharywaleed.ahsan.3" style={{ color: "white"}}><BsFacebook/></a>
        <a target="blank" href="https://github.com/Waleed0260" style={{ color: "white"}}><BsGithub/></a>
        <a target="blank" href="https://www.linkedin.com/in/muhammad-waleed-1b044a227/" style={{ color: "white"}}><BsLinkedin/></a>
      </Icons>
    </Foot>
  )
}

const Foot = styled.div`
background: linear-gradient(35deg, #494949, #313131);
display: flex;
justify-content: space-around;
flex-direction: row;
@media screen and (max-width: 480px) {
  flex-direction: column;
  align-items: center;
}
color: white;
margin-bottom: -2rem;
`

const Heading = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
`

const Icons = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
gap: 2rem;

@media screen and (max-width: 480px) {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
`

export default Footer
