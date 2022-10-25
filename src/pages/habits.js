
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import NewHabitSelection from "../components/habitSelection";
import UpdatedHabits from "../components/updatedHabits";
import { AuthContext } from "../constants/data";
import axios from "axios";

export default function Habits() {

const {token,profileImg,habitList,setHabitList}=React.useContext(AuthContext)
console.log(token)
const [able,setAble]=useState(false)
const[opened,setOpened]=useState(false)

console.log(profileImg)

useEffect(()=>{
    const config = {
    headers: {
        "Authorization": `Bearer ${token}` 
    }
}    
 
axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config)
    .then((res)=>{
        console.log(res.data)
        setHabitList(res.data)
        setAble(true)
    })
    .catch(err=>err.response.data)

},[token,opened])




    return (
        <>
            <StyledHabits>
                <Header />
               
               <div className="footer">
                <Footer/>
                </div >
                <div className="newhabit">
                    <NewHabitSelection opened={opened} setOpened={setOpened} />
                </div>
                {able ? habitList.map((l,index)=> <UpdatedHabits habit={l.name} id={l.id} days={l.days} key={index} />): undefined}

                {able ?'' :  <p className="noHabits">
                Você não tem nenhum hábito cadastrado ainda.
                 Adicione um hábito para começar a trackear!
                </p>}
               
            </StyledHabits>
         
            

        </>

    )
}

const StyledHabits = styled.div`
background-color: aliceblue;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
position: relative;
.footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    
}

.noHabits{
    font-size: 24px;
    margin: 15px;
}

`