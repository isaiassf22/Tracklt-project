import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL } from "../constants/data"
import tracklt from "../pics/Group8.png"

export default function SignUp() {
   
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[name,SetName]=useState("")
    const[photo,setPhoto]=useState("")

    function createAcount(event){
        event.preventDefault()
        axios.post(`${BASE_URL}/sign-up`,{email:email, name:name, image:photo, password:password})
            .then((res)=> console.log(res.data))
            .catch((err)=>console.log(err.response.data))
            
    }


    return (
        <>
            <LoginStyle>
                <img src={tracklt} alt="" />
                <form onSubmit={createAcount}>
                    <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                    <input type="password" placeholder="senha" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                    <input type="text" placeholder="nome" value={name} onChange={(e)=> SetName(e.target.value)} required/>
                    <input type="url" placeholder="foto" value={photo} onChange={(e)=> setPhoto(e.target.value)} required/>
                    <button type="submit">cadastrar</button>
                </form>

                
                <Link to="/"><p> Já tem uma conta? Faça o login!</p></Link>
            </LoginStyle>
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
input{
    width: 80%;
    height: 45px;
    border-radius: 5px;
    font-size: 18px;
    margin-bottom: 5px;

}
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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