import { Link } from "react-router-dom";
import styled from "styled-components";
import Habits from "./habits";
import tracklt from "../pics/Group8.png"
import axios from "axios";
import { BASE_URL } from "../constants/data";
import { useState } from "react";


export default function Login() {

    const[login,setLogin]=useState("")
    const[password,setPassword]=useState("")

    function loginRequest(event) {
       // axios.post(`${BASE_URL}/login`)
       event.preventDefault()
        console.log('oi login')
        console.log(login)
        console.log(password)
        axios.post(`${BASE_URL}/login`,{email:login, password:password})
            .then((resp)=> console.log(resp.data))
            .catch((err)=>console.log(err.response.data))
    }



    return (
        <>
            <LoginStyle>
                <img src={tracklt} alt="trackit" />
                <form onSubmit={loginRequest}>
                    <input type="email" placeholder="email" value={login} onChange={(e)=> setLogin(e.target.value)} required />
                    <input type="password" placeholder="senha" value={password} onChange={(e)=> setPassword(e.target.value)} required />
                    <button type="submit">Entrar</button>
                </form>
                <Link to="/cadastro"> <p>Não tem uma conta? Cadastre-se!</p> </Link>
            </LoginStyle>


            <Habits />

        </>

    )
}

const LoginStyle = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;

img{
    
    width: 60%;
    height: auto;
    margin-top: 120px;
}
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 18px;
    background-color: blue;
    margin-bottom: 15px;
    color: white;
    font-weight: 600;
}
p{
    font-size: 16px;
}
`