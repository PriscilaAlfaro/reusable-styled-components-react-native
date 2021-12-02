import React from 'react';
import styled from 'styled-components/macro';

const ProfileName = styled.p`
    font-size: 30px;
    line-height: 37px;
    font-family: 'Montserrat', sans-serif;
    color: ${props=> props.textColor};
    font-weight: bold;
    max-width: 168px;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    z-index: 2;
`
const ProfileOverlay = styled.div`
    background: rgba(17, 17, 17, 0.73);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
    border-radius: 50%;
    z-index: 1;
`

const ProfileContainer=styled.div`
    display:flex;
    align-items: center;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    position: relative;
    text-align: center;
    margin: 100px auto;
    &:hover ${ProfileOverlay}{
        opacity: 1;
    }
    &:hover ${ProfileName}{
        display: block;
        -webkit-transition: all 0.6s ease-in-out 0s;
        -moz-transition: all 0.6s ease-in-out 0s;
        transition: all 0.6s ease-in-out 0s;
    }
`

const ProfileImg = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    position: relative;
    text-align: center;
    margin: 100px auto;
    z-index: 0;
`



const ProfileImage = ({ image, name, textColor})=> {
    console.log("ProfileImage", textColor)
    return (
        <ProfileContainer>
            <ProfileOverlay></ProfileOverlay>
            <ProfileImg src={image} alt="profile"/>
            <ProfileName textColor={textColor}>{name}</ProfileName>
        </ProfileContainer>
    );
}

export default ProfileImage;
