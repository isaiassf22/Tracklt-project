import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"
import { AuthContext } from "../constants/data"
//import { AuthContext } from "../constants/data"

export default function UpdatedHabits({ habit, id,days }) {

    const buttons = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [todelete, setToDelete] = useState('flex')
    const { token } = React.useContext(AuthContext)

    function trash() {
        setToDelete('none')
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            .then(res => {
                console.log(res)
                alert('deletado!')
            })
            .catch(err => {
                console.log(err)
                alert(err.response.data)
            })
    }

    return (
        <>
            <UpdatedHabitsStyled display={todelete}>
                <p>{habit}</p>
                <div>
                { buttons.map((l, index) => {
                    if (days.includes(index)){
                        return <button className="fill" key={index} >{l}</button>
                    } else{
                        return <button key={index}  >{l}</button>
                    }   } )}
                </div>
                <ion-icon name="trash-outline" onClick={trash}></ion-icon>
            </UpdatedHabitsStyled>

        </>
    )
}

const UpdatedHabitsStyled = styled.div`
margin-top: 20px;
width:90%;
height: 120px;
display: ${props => props.display};
flex-direction: column;
background-color: white;
justify-content: center;
margin-left: 20px;
border-radius: 10px;
position: relative;
p{
    font-size: 25px;
    
}
div,p{
margin-left: 35px;
}
button{
    width: 45px;
    margin-top: 10px;
    margin-right: 10px;
    height: 45px;
    border-radius: 5px;
    color: gray;
    border: 1px solid gray;
    background-color: white;
}
.fill{
    background-color: gray;
    color: white;
}

ion-icon{
    width: 25px;
    height: 25px;
    position: absolute;
    right: 10px;
    top: 10px;
}

`