import  styled  from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 0 5%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 2%;
flex-direction: column;
`
export const Tittle = styled.div`
font-size: 1.5rem;
`
export const Form = styled.form`
padding: .5rem 0;

`
export const Input = styled.input`
padding: .5rem;
margin: .3rem;
border-radius: .7rem;
border: none;
`
export const Button = styled.button`
padding: .6rem;
margin: .5rem;
border-radius: .5rem;
background-color: #114d4d;
color: #fff;

cursor: pointer;
&:hover{
  background-color: #027575;
}
`

