
import React from "react";
import styled from "styled-components";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import NewHabitSelection from "../components/habitSelection";
import UpdatedHabits from "../components/updatedHabits";


export default function Habits() {

//const {token}=React.useContext(AuthContext)
//console.log(token)
    

    return (
        <>
            <StyledHabits>
                <Header />
               
               <div className="footer">
                <Footer/>
                </div >
                <div className="newhabit">
                    <NewHabitSelection/>
                </div>
               <UpdatedHabits/>
                <p className="noHabits">
                Você não tem nenhum hábito cadastrado ainda.
                 Adicione um hábito para começar a trackear!
                </p>
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