import styled from "styled-components"
import { StyledDefault } from "./habits"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import axios from "axios"
import { AuthContext } from "../constants/data"
import { useContext } from "react"

export default function TimeLine() {

    const { token } = useContext(AuthContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily`, config)
        .then((res) => {
            console.log(res.data)
        })
        .catch(err => err.response.data)

    return (
        <>
            <StyledDefault>
                <Header />
                <h1>historico</h1>

                <p>Em breve você poderá ver o histórico <br /> dos seus hábitos aqui!</p>

                <div className="footer">
                    <Footer />
                </div >
            </StyledDefault>



        </>

    )
}