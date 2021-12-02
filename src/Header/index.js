import React from 'react';
import styled from 'styled-components/macro';

const HeaderContainer = styled.div`
    width: 100%;
    height: 550px;
    color: #FFFFFF;
    font-family: "Charter";
    display: flex;
    background: ${props => props.background};
`
const HeaderTitle = styled.h1`
    font-family: "Charter";
    font-weight: bold;
    text-shadow: 0px 4px 4px #FFF5D1;
    position: absolute;
    max-width: 684px;
    height: 243px;
    left: 0;
    bottom: 200px;
    font-size: 4rem;
    line-height: 100px;
    z-index: 1;

    @media (min-width: 768px){
        font-size: 4.5rem;
    }

    @media (min-width: 992px) {
        font-size: 6rem;
        line-height: 122px;
    }
`
const HeaderPages = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #FFF5D1;
    font-weight: bold;
    display: flex;
    width: 50%;
    justify-content: center;
    margin-left: 25%;
    z-index: 1;

    @media (min-width: 768px){
        width: 50%;
        justify-content:space-around;
        margin-left: 50%;
    }
`
const HeaderParagraph = styled.p`
    margin: 10px;
`

const HeaderImage = styled.img`
    position: absolute;
    width: 70%;
    left: 90px;
    top: 0px;
    overflow: hidden;

    @media (min-width: 768px){
        width: 500px;
    }
`

const Header = ({ title, backgroundColor})=> {
    return (
        <HeaderContainer background={backgroundColor}>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderPages>
                <HeaderParagraph>about</HeaderParagraph>
                <HeaderParagraph>trips</HeaderParagraph>
                <HeaderParagraph>pricing</HeaderParagraph>
                <HeaderParagraph>contact</HeaderParagraph>
            </HeaderPages>
            <HeaderImage src="./images/circle.png" alt="yellow circle"/>
        </HeaderContainer>
    );
}

export default Header;
