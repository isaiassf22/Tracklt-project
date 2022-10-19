import styled from "styled-components"
import GlobalStyle from "./style/globalStyle"
import Login from "./login"
import SignUp from "./sign-up"
import { BrowserRouter, Route, Routes } from "react-router-dom"


export default function App() {
    return (
        <>
            <BrowserRouter>
             <GlobalStyle />
            <BaseStyle>
            <Routes>
                <Route path="/" element={ <Login />}/>
                <Route path="/cadastro" element={ <SignUp />}/>
            </Routes>
            </BaseStyle>
            </BrowserRouter>
        </>
    )
}

const BaseStyle = styled.div`
max-width:600px;
height: 100vh;
background-color: E5E5E5;
margin: 0 auto;
border: 1px solid gray;
display: flex;
justify-content: center;
`