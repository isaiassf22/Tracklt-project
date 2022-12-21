import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import tracklt from "../pics/Group8.png"
import axios from "axios";
import { BASE_URL } from "../constants/data";
import { useState } from "react";
import { AuthContext } from "../constants/data";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const[able,setAble]=useState(false)

    const { setToken, setProfileImg } = React.useContext(AuthContext)

    function loginRequest(event) {
        // axios.post(`${BASE_URL}/login`)
        event.preventDefault()
        console.log('oi login')
        console.log(login)
        console.log(password)
        axios.post(`${BASE_URL}/login`, { email: login, password: password })
            .then(res => {
                navigate('/habitos')
                console.log(res.data)
                console.log(res.data.token)
                setToken(res.data.token)
                setProfileImg(res.data.image)
            })

            .catch((err) => console.log(err.response.data))
    }



    return (
        <>
            <LoginStyle>
                <img src={tracklt} alt="trackit" />
                <form onSubmit={loginRequest}>
                    <input type="email" placeholder="email" value={login} onChange={(e) => setLogin(e.target.value)} required />
                    <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                   {able ? <button type="submit"   >
                     <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color='white'
                        ariaLabel='three-dots-loading'
                        wrapperStyle
                        wrapperClass
                    
                    />
                   </button> :<button type="submit" onClick={()=>setAble(true)}  >Entrar</button>} 
                    
                </form>
                <Link to="/cadastro"> <p>Não tem uma conta? Cadastre-se!</p> </Link>
               
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
    background-color: #52B6FF;
    margin-bottom: 15px;
    color: white;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    font-size: 16px;
}
`