import styled from "styled-components";

export const StyledButton = styled.button`
background-color: #868E96;
color: #FFFFFF;
height: 38.5px;
border: none;
padding-right: 22px;
padding-left: 22px;
align-items: center;
justify-content: center;
display: flex;
font-size: 12.83px;
line-height: 21.17px;
font-weight: 500;
border-radius: 3.21px;
min-width: 110px;
cursor: pointer;
width: 100%;


&:hover{
    background-color: #343B41;
}


@media (min-width: 768px) {
font-size: 16px;
padding-right: 22.33px;
padding-left: 22.33px;
height: 48px;
line-height: 26.39px;
border-radius: 4px;
}

`