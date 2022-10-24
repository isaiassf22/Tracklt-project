import styled from "styled-components"
import circle from "../pics/Ellipse 2.png"
import draw from "../pics/Group 9.png"

export function Footer(){
    return(
    <>
    <StyledFooter>
       <p>Hábitos</p>
    <div>
         <img className="um" src={circle} alt="footer" />
         <img className="dois" src={draw} alt="footer" />
    </div>
   
    <p>Histórico</p> 
    </StyledFooter>
    
    </>
    )
}

const StyledFooter= styled.div`
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    bottom: 0px;
    background-color: white;
    font-size: 22px;
    font-weight: 600;
    color: blue;
    img{
        
    }
    div{
        position: relative;
    }
    .dois{
    position: absolute;
    right: 3px;
    top: 6px;
    }
`