import styled  from "styled-components";

export const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background-color: white;
background-color: #114d4d;
color: #fff;
font-size: 1.5rem;
padding: 0 5%;
`
export const Logo = styled.div`
`
export const Lista = styled.ul`
display: flex;
list-style: none;
`
export const Item = styled.li`
:hover{
  color: black;
    background-color: #fff;;
  }

a{
  margin-left: 3rem;
  padding: 1.5rem;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  transition:  background .3s;
}
`
