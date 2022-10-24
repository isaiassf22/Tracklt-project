import { useState } from "react"
import styled from "styled-components"

export default function UpdatedHabits() {

    const buttons=["D","S","T","Q","Q","S","S"]
    const [todelete,setToDelete]=useState('flex')


    function trash(){
        alert('deseja remover?')
        setToDelete('none')
    }

    return (
        <>
            <UpdatedHabitsStyled display={todelete}>
                <p>pegar as kids na escola</p>
            <div>
                {buttons.map( (l,index)=>   <button key={index} >{l}</button>)}
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
display: ${props=>props.display};
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
button:target{
    background-color: gray;
}

ion-icon{
    width: 25px;
    height: 25px;
    position: absolute;
    right: 10px;
    top: 10px;
}

`