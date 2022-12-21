
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import NewHabitSelection from "../components/habitSelection";
import UpdatedHabits from "../components/updatedHabits";
import { AuthContext } from "../constants/data";
import axios from "axios";

export default function Habits() {

    const { token, habitList, setHabitList } = React.useContext(AuthContext)
    const [able, setAble] = useState(false)
    const [opened, setOpened] = useState(false)



    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            .then((res) => {
                console.log(res.data)
                setHabitList(res.data)
                if (res.data.length > 0) {
                    setAble(true)
                }

            })
            .catch(err => err.response.data)

    }, [token, opened])




    return (
        <>
            <StyledDefault>
                <Header />

                <div className="footer">
                    <Footer />
                </div >
                <div className="newhabit">
                    <NewHabitSelection opened={opened} setOpened={setOpened} />
                </div>
                {able ? habitList.map((l, index) => <UpdatedHabits habit={l.name} id={l.id} days={l.days} key={index} />) : undefined}

                {able ? '' : <p className="noHabits">
                    Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
                </p>}

            </StyledDefault>



        </>

    )
}

export const StyledDefault = styled.div`
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
h1{
    color:#126BA5;
    font-weight: 400;
    font-size: 35px;
    margin-top: 70px;
    margin-left: 30px;
    margin-bottom: 20px;
}
p{
    font-size: 25px;
    margin-left: 30px;
}

`