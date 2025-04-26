import styled from "styled-components";

export const StyledButton = styled.button`
background-color: #8B1D07;
color: #FFFFFF;
height: 38.5px;
border: none;
padding-right: 17.92px;
padding-left: 17.92px;
align-items: center;
justify-content: center;
display: flex;
font-size: 12.83px;
line-height: 21.17px;
font-weight: 500;
border-radius: 3.26px;
min-width: 110px;
cursor: pointer;
width: 100%;


&:hover{
    background-color: #8B2D00;
}

&:disabled {
    background-color: #8B3D07;
}

@media (min-width: 768px) {
font-size: 16px;
padding-right: 22.33px;
padding-left: 22.33px;
height: 48px;
border-radius: 4.06px;
}
`