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

export const EditContainer = styled.div`
color: #fff;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,.95);
z-index: 100;
top: 0;
flex-direction: column;

`
export const EditBox = styled.div`
padding: 5%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 2%;
flex-direction: column;
box-shadow: 0 0 15px 0;
border-radius: 20px;
background-color: rgba(1,1,1,.8);
position: relative;
`
export const BtnFechar = styled.button`
padding: .6rem;
margin: .5rem;
border-radius: 50%;
color: #000;
position: absolute;
top:0;
right: 0;
transition: all 300ms ease;
border: none;

&:hover{
  background-color: gray;
  color: #fff;
}
`