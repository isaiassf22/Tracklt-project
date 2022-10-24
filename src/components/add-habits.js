import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"


export default function AddHabits({openedBox,opened}) {
    const [title, setTitle] = useState("")
    const [days, setDays] = useState([])
    //const {token}=React.useContext(AuthContext)


    function toSave(day) {
        setDays([...days, day])
    }

    function toCancel(){
        setDays([])
        setTitle("")

    }
    function toSend() {
        const answer = { name: title, days: days }

        const config = {
            headers: {
                "Authorization": `Bearer {token}` 
            }
        }
        openedBox(false)
        console.log(answer)
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', answer,config)
            .then(res => {console.log(res.data)
            console.log(opened)})
            .catch(err => err.response.data)

    }


    return (
        <>
            <StyledNewHabit>
                <form>
                    <input type="text" placeholder="nome do hábito" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <br />
                    <div>
                        <button type="button" className="day" onClick={() => toSave(1)}>D</button>
                        <button type="button" className="day" onClick={() => toSave(2)}>S</button>
                        <button type="button" className="day" onClick={() => toSave(3)}>T</button>
                        <button type="button" className="day" onClick={() => toSave(4)}>Q</button>
                        <button type="button" className="day" onClick={() => toSave(5)}>Q</button>
                        <button type="button" className="day" onClick={() => toSave(6)}>S</button>
                        <button type="button" className="day" onClick={() => toSave(7)}>S</button>
                    </div>
                    <button type="button" className="first" onClick={toCancel}>cancelar</button>
                    <button type="button" className="second" onClick={toSend}>salvar</button>
                </form>
            </StyledNewHabit>
        </>

    )
}
const StyledNewHabit = styled.div`
margin-left: 20px;
width: 90%;
height: 300px;
margin-top: 30px;
background-color: white;
border-radius: 10px;
position: relative;

form{
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
form input{
    width: 90%;
    height: 40px;
    margin-top: 25px;
    font-size: 20px;
    border-radius: 5px;
    
}
.day{
    width: 45px;
    margin-top: 10px;
    margin-right: 10px;
    height: 45px;
    border-radius: 5px;
    color: gray;
    border: 1px solid gray;
    background-color: white;
}
.fillday{
    width: 45px;
    margin-top: 10px;
    margin-right: 10px;
    height: 45px;
    border-radius: 5px;
    color: white;
    border: 1px solid gray;
    background-color: gray;
}

.first{
    width: 100px;
    height: 40px;
    color: blue;
    background-color: white;
    border-radius: 10px;
    font-size: 20px;
    position: absolute;
    bottom: 5px;
    right: 140px;
}
.second{
    width: 100px;
    height: 40px;
    background-color: blue;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    position: absolute;
    bottom:5px;
    right: 20px;
    
}

`