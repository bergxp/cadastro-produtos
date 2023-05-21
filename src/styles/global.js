import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap');
padding: 0;
margin: 0;
box-sizing: border-box;
}
body{
  font-family: 'Poppins', sans-serif;
  outline: none;
  text-decoration: none;
  background-color: rgba(0,0,0,0.1);
  
}
`

