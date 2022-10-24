
import styled from "styled-components"
import AddHabits from "./add-habits"


export default function NewHabitSelection({opened,setOpened}) {
    
    
    
    function button(){
       if(opened){
        setOpened(false)
       }else{
        setOpened(true)
       }
    }
 
    return (
        <>
            <MyStyledHabits>
                <p>Meus Hábitos</p>
                <button onClick={button}>+</button>
            </MyStyledHabits>
           {opened ? <AddHabits openedBox={setOpened} opened={opened} /> : null} 
        </>
    )
}

const MyStyledHabits = styled.div`
    width: 100%;
    height: 100px;
    margin:15px 0;
    display: flex;
    position: relative;
    align-items: center;
    p{
        position: absolute;
        left: 20px;
        font-size: 30px;
        color: blue;
    }
    button{
        position: absolute;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: blueviolet;
        color: white;
        font-size: 30px;
    }
`