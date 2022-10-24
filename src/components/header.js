import styled from "styled-components"
import track from "../pics/TrackIt.png"
import pic from "../pics/Rectangle 14.png"
import React from "react"


export function Header(){
    
    //const{profileImg,caneta}=React.useContext(AuthContext)    
    return(
    <>
    <StyledHeader>
        <img className="logo" src={track} alt="" />
        <img className="picture" src={pic} alt="" />
    </StyledHeader>
    </>
    )
}

const StyledHeader = styled.div`
width: 100%;
height: 150px;
background-color: blue;
display: flex;
align-items: center;
position: relative;
.logo{
    width: 180px;
    height: 80px;
    position: absolute;
    left: 20px;
}
.picture{
    width: 100px;
    position: absolute;
    right: 20px;
    border-radius: 100px
}
`