import React from 'react';
import styled from 'styled-components/macro';

const CookieAlertContainer = styled.div`
   width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 100px auto;
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.backgroundColor};`


const CookieAlertText = styled.p`
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin: auto 20px;
`

const CookieAlert = ({ text, textColor, backgroundColor})=>{
    return (
        <CookieAlertContainer textColor={textColor} backgroundColor= {backgroundColor}>
            <CookieAlertText>{text}</CookieAlertText>
        </CookieAlertContainer>
    );
}

export default CookieAlert;


