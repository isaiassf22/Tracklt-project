import styled from "styled-components"
import GlobalStyle from "./style/globalStyle"
import Login from "./pages/login"
import SignUp from "./pages/sign-up"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Habits from "./pages/habits"
import Today from "./pages/today"
import TimeLine from "./pages/timeline"
import { AuthProvider } from "./constants/data"



export default function App() {
    return (
        <>
        <AuthProvider>
            <BrowserRouter>
                 <GlobalStyle />
            <BaseStyle>
            <Routes>
                <Route path="/" element={ <Login />}/>
                <Route path="/cadastro" element={ <SignUp />}/>
                <Route path="/habitos" element={ <Habits />}/>
                <Route path="/today" element={ <Today/>}/>
                <Route path="/historico" element={ <TimeLine />}/>
            </Routes>
            </BaseStyle>
            
            </BrowserRouter>
        </AuthProvider>
            
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