import { StyledDefault } from "./habits"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { AuthContext } from "../constants/data"
import { useContext, useEffect, useState } from "react"
import WhiteBox from "../components/whitebox(today)"
import axios from "axios"
import dayjs from "dayjs"
import isoWeek from "dayjs/plugin/isoWeek"

dayjs.extend(isoWeek)

export default function Today() {

    const { habitList, token, click } = useContext(AuthContext)
    console.log(token)
    const [tasks, setTasks] = useState([])
    const [made, setMade] = useState([])
    const [percentage, setPercentage] = useState([])
   

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then((res) => {
                console.log(res.data)
                setTasks(res.data)
                setMade(res.data.filter((l) => l.done))


                setPercentage(parseInt(((made.length / (tasks.length)) * 100).toFixed(2)))
                console.log(parseInt(((made.length / (tasks.length)) * 100).toFixed(2)))

            })
            .catch(err => err.response.data)

    }, [click])
    const day = parseInt(dayjs().day())
    console.log(day)

    var isoWeek = require('dayjs/plugin/isoWeek')

    dayjs.extend(isoWeek)


    console.log(dayjs().get('day'))


    return (
        <>
            <StyledDefault color="gray">

                <Header />
                <h1> {dayjs().get('day')}  Quarta, 21/12</h1>
                {percentage === [] ? <p style={{ color: "gray" }}> Nenhum hábito construido ainda</p> : <p style={{ color: "green" }}>{((made.length / (tasks.length)) * 100).toFixed(2)}% dos hábitos concluidos </p>}

                {tasks.map((task, index) => (
                    <WhiteBox task={task.name} done={task.done} id={task.id} sq={task.currentSequence} hsq={task.highestSequence} key={index} />

                ))}
                <div className="footer">
                    <Footer />
                </div >
            </StyledDefault>
        </>

    )
}

