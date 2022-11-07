import styled from "styled-components";


// Header components
export const StyledHeader = styled.header `
   width: 100%;
   height: 80px;
   
   svg {
      margin-left: 10%;
   }

   a {
      font-size: 20px;
   }
`

export const Nav = styled.nav `
  display: flex;
  justify-content:space-between;
  align-items: center;
`

export const StyledLink = styled.a `
  color: black;
  padding: 25px;
  text-decoration: none;
  font-weight: 400;
  color: #7B7B7D;
` 

export const LinkContainer = styled.div`
   margin-right: 10%;
`

// section containers

export const Container = styled.section `
   max-width: 1280px;
   height: 80vh;
   margin: auto;
   
`
export const TemplateContainer = styled.div `
&.flex {
   display: flex;
}

`

export const Template = styled.div `
   margin: 0 auto;
   
   &.black{
      background-color: #010326;
      width: 380px;
      margin-left: 3%;
      font-weight: 300;
      height:555px
   }
`

export const FlexContainer = styled.div `
    display: flex;
    

   h1 {
      margin: 2% auto;
      width:350px;
      font-size: 60px;
      font-weight: 700;
   }
`
export const BlockContainer = styled.div `
   display: block;
   
   h2 {
      width:460px;
      font-size: 20px;
      font-weight: 500;
      color: #898A9E;
   }
`

// Buttons 

export const Button = styled.button `
&.black {
    background-color: black;
    color: white;
    padding: 10px 55px;
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
}
`

// Cards 
