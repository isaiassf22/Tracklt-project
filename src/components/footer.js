import { Link } from "react-router-dom"
import styled from "styled-components"
import circle from "../pics/Ellipse 2.png"
import draw from "../pics/Group 9.png"

export function Footer() {
    return (
        <>
            <StyledFooter>
                <Link to="/habitos" >
                    <p>Hábitos</p>
                </Link>
                <Link to="/hoje">
                    <div>
                        <img className="um" src={circle} alt="footer" />
                        <img className="dois" src={draw} alt="footer" />
                        <p>Hoje</p>
                    </div>

                </Link>

                <Link to="/historico">
                    <p>Histórico</p>
                </Link>

            </StyledFooter>

        </>
    )
}

const StyledFooter = styled.div`
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
        p{
            position: absolute;
            top: 30px;
            right: 20px;
            color: #ffff;
            font-weight: 200;
        }
    }
    .dois{
    position: absolute;
    right: 3px;
    top: 6px;
    }
    
`