import styled from "styled-components"
import { useState } from "react"
import { AuthContext } from "../constants/data"
import axios from "axios"
import { useContext } from "react"

export default function WhiteBox({task, done, id, made}) {

    const { token, setClick, click } = useContext(AuthContext)
    const [check, setCheck]=useState(done)


    function verify () {
        if (done===true){
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
    
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{}, config)
                .then((res) => {
                    console.log(res.data)
                    setCheck(false)
                    setClick([...click,2])
                })
                .catch(err => err.response.data)

        }
        else{

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
    
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{}, config)
                .then((res) => {
                    console.log(res.data)
                    setCheck(true)
                    setClick([...click,1])
                })
                .catch(err => err.response.data)
        }
        
    }

   

    return (
        <Box bg={check}>
             
            <div>
                <p>
                    {task}
                </p>
                <p>praticar natação</p>
            </div>
            <ion-icon name="checkmark-outline" onClick={() => verify()}  ></ion-icon>
        </Box>
    )
}

const Box = styled.div`
margin-top: 20px;
width:90%;
height: 120px;
background-color: white;
justify-content: center;
margin-left: 20px;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
p{ 
    fill : red ;
}

ion-icon{
    margin-right: 30px;
    width: 90px;
    height: 90px;
    fill: aliceblue;
    color: white;
    background-color: ${props => props.bg ? "green" : '#E7E7E7'};
    
    border-radius: 20px;
}
`
