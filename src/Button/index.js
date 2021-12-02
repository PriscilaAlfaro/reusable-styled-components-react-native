import React from 'react';
import styled from 'styled-components/macro';


const BigButton = styled.button`
    width: 257px;
    height: 100px;
    border: 4px solid #005D25;
    box-sizing: border-box;
    border-radius: 50px;
    margin: 100px auto;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
     -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
    color: ${props => props.color};
    background: ${props => props.background};

    &:hover { 
        background: #005E25;
        color: white !important;
    }

    &:disabled {
        color: rgba(0, 94, 37, 0.5);
        background: rgba(0, 94, 37, 0.25);
        pointer-events: none;
    }
`


const Button = ({ disabled, buttonText, textColor, buttonColor, setDisable})=> {
    
    const handleDisable=()=>{
        setDisable(true)
    }

    return (
        <BigButton disabled={disabled} onClick={handleDisable} color={textColor} background={buttonColor}>{buttonText}</BigButton>
    );
}

export default Button;
