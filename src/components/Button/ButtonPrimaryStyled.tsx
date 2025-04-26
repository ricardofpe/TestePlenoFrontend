import styled from "styled-components";

export const StyledButton = styled.button`
background-color: #8B1D07;
color: #FFFFFF;
height: 40px;
border: none;
padding-right: 22px;
padding-left: 22px;
align-items: center;
justify-content: center;
display: flex;
font-size: 12.83px;
line-height: 21.17px;
font-weight: 500;
border-radius: 4px;
min-width: 110px;
cursor: pointer;
width: 100%;


&:hover{
    background-color: #8B2D00;
}

&:disabled {
    background-color: #8B3D07;
}
`