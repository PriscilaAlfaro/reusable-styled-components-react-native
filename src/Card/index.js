import React from 'react';
import styled from 'styled-components/macro';

const CardContainer= styled.div`
    color: #000000;
    background: #E5DCCD;
    box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    width: 300px;
    height: 550px;
    margin: 50px auto;

    @media (min-width: 768px){
        width: 500px;
        height: 650px;
    }
`

const CardImage= styled.img`
    width: 100%;
    height: 310px;
    border-radius: 2px 2px 0px 0px;

    @media (min-width: 768px){
        width: 500px;
        height: 447px;
    }
`

const ParagraphContainer = styled.div`
    font-family: Roboto;
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
`

const CardTitle = styled.h1`
    font-family: Rosarivo;
    font-style: normal;
    font-weight: normal;
    font-size: 2.8rem;
    max-width: 330px;
    margin: 0 auto;
`


const Card = ({title, image, date, number})=> {
    return (
        <CardContainer>
            <CardImage src={image} alt="card patron"/>
            <ParagraphContainer>
            <p>{date.toUpperCase()}</p>
            <p>{number}</p>
            </ParagraphContainer>
            <CardTitle>{title}</CardTitle>
        </CardContainer>
    );
}

export default Card;
