import { Link } from "react-router-dom";
import styled from "styled-components";
import Habits from "./habits";
import tracklt from "./pics/Group8.png"



export default function Login(){

    return(
    <>
    <LoginStyle>
        <img src={tracklt} alt="" />
    <input type="text" placeholder="email" />
    <input type="text" placeholder="senha" />
    <button>Entrar</button>
    <Link to="/cadastro"> <p>Não tem uma conta? Cadastre-se!</p> </Link>
    </LoginStyle>
    

    <Habits/>

    </>
    
    )
}

const LoginStyle=styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;

img{
    
    width: 60%;
    height: auto;
    margin-top: 120px;
}
input{
    width: 80%;
    height: 45px;
    border-radius: 5px;
    font-size: 18px;
    margin-bottom: 5px;

}
button{
    width: 80%;
    height: 45px;
    border-radius: 5px;
    background-color: blue;
    margin-bottom: 15px;
}
p{
    font-size: 16px;
}
`