import React from 'react';
import styled from 'styled-components/macro';

const FooterContainer = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    align-items: flex-end;
    text-align: right;
    position: absolute;
    padding-top: 50px;
    z-index: -1;
    background-color: ${props => props.background};
`
const FooterLinks = styled.div`
    width: 97%;
    height: 200px;
    font-size: 15px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    color: #323232;
    z-index: 3;

    @media (min-width: 768px){
        width: 97%;
        height: 247px;
        font-size: 30px;
    }
`
const FooterLink = styled.p`
    margin: 0;
`

const FooterLine = styled.img`
    position: absolute;
    width: 80%;
    height: 24px;
    left: 0px;
    top: 112px;
    border-radius: 0px 12px 12px 0px;
`

const FooterBlue = styled.img`
    position: absolute;
    width: 145px;
    overflow: hidden;
    left: 20%;
    top: -48px;

    @media (min-width: 768px){
        width: 200px;
        top: -90px
    }
`

const FooterBlueBig = styled.img`
    position: absolute;
    width: 253px;
    left: -23px;
    top: 358px;
    overflow: hidden;

    @media (min-width: 768px){
        width: 500px;
        top: 214px;
    }

    @media (min-width: 992px) {
        top: 215px
    }
`

const FooterOrange = styled.img`
    position: absolute;
    width: 95px;
    top: 94px;
    z-index: 1;

    @media (min-width: 768px){
        width: 100px;
    }
`

const FooterOrangeBig = styled.img`
    position: absolute;
    width: 170px;
    left: 50%;
    top: 85px;
    width: 180px;
    left: 30%;
    top: 120px;
    overflow: hidden;
    z-index: -1;

    @media (min-width: 768px){
        width: 230px;
        left: 50%;
        top: 85px;
    }

    @media (min-width: 992px) {
        width: 340px;
        left: 426px;
    }
`

const Footer=({color, links})=> {
    console.log(color)
    return (
        <FooterContainer background={color}>
            <FooterLinks>
                {links.map(link => <FooterLink key={link}>{link}</FooterLink>)}
            </FooterLinks>
            <FooterLine src="./images/pink-line.png" alt="pink line" />
            <FooterBlue src="./images/ellipse-ligth-blue.png" alt="circle ligth blue"/>
            <FooterBlueBig src="./images/ellipse-middle.png" alt="circle ligth blue" />
            <FooterOrange src="./images/ellipse-orange.png" alt="circle orange" />
            <FooterOrangeBig src="./images/ellipse-orange.png" alt="circle orange" />
        </FooterContainer>
    );
}

export default Footer;
