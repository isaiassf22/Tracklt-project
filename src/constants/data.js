
import React, { useState } from "react"

export const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth'

export const bac_color = 'E5E5E5'

export const AuthContext = React.createContext({})

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState("token01")
    const [profileImg, setProfileImg] = useState("no-photos")
    const [newHabit,setNewHabit]=useState({})
    const [habitList,setHabitList]=useState([])
    const [click,setClick]=useState([])

    return (
        <AuthContext.Provider value={{ token, setToken,profileImg, setProfileImg,newHabit,setNewHabit,habitList,setHabitList,click,setClick}}>
            {children}
        </AuthContext.Provider>
    )
}