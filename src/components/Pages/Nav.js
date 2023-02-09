import React,{useState} from 'react'
import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";

const Nav = () => {
  const [input,setInput]=useState("")
  const image="";
  const handleInput=(e)=>{
    setInput(e.target.value)
  }
  return (
    <div>
        <Container>
          <Logo>
            <img src={image} alt="logo"/>
          </Logo>
          <Wrap>
            <p>visit dorm</p>
            <p>dorm location</p>
            <input type="text" placeholder='Search...' value={input} onChange={handleInput}/><BsSearch/>


          </Wrap>
          <Wrap>
            Account page
          </Wrap>
        </Container>
    </div>
  )
}

export default Nav

const Container=styled.div`

`
const Logo=styled.div`

`
const Wrap=styled.div`

`