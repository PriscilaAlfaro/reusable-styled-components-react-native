import React, {useState} from 'react';
import styled from 'styled-components/macro';

const SearchBarContainer=styled.div`
    height: 50px;
    font-family: Monaco;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    margin: 20px auto;
    width: 90%;

    @media (min-width: 768px){
        width: 662px;
        height: 80px;
        width: 70%;
    }
`

const Search = styled.div`
    width: 30px;
    height: 30px;
    position: relative;
    left: 10%;
    top: 5%;

     @media (min-width: 768px) {
        width: 50px;
        height: 50px;
        left: 13%;
        top: 5%;
    }
     @media (min-width: 1200px) {
        left: 7%;
        top: 5%;

    }
`
const Svg = styled.svg`
    width: 30px;
    height: 30px;
`

const Path = styled.path`
fill: ${props => props.color};
`

const SearchBarInput = styled.input`
    background-color: ${props => props.background};
    height: 60px;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    border-radius: 40px 0 0 40px;
    border: medium;
    font-family: Monaco;

    @media (min-width: 768px) {
        height: 80px;
        width: 530px;
        font-size: 1.2rem;
        text-align: center;
    }
`
const SearchBarButton = styled.button`
    background: ${props => props.background};
    width: 100px;
    height: 60px;
    font-size: 0.8rem;
    align-items: center;
    text-align: center;
    display: flex;
    border-radius: 0 40px 40px 0;
    justify-content: center;
    font-family: Monaco;
    border: medium;
    color: white;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 130px;
        height: 80px;
        font-size: 30px;
        font-size: 1.2rem;
    }
`
const SearchBarOutput = styled.div`
    justify-content: center;
    text-align: center;
    display: flex;
    width: 80%;
    margin: 0 auto;
    min-height: 30px;
    font-family: Monaco;
    font-size: 15px;
`


const SearchBar = ({ primaryColor, secondaryColor}) => {
const [search, setSearch]= useState("");

    const onChange = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue)
    }

    return (
        <>
            <SearchBarContainer>
                <Search >
                    <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 50 50" >
                        <Path fill={secondaryColor} d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></Path>
                    </Svg>
                </Search>
                <SearchBarInput
                placeholder="type something..."
                type="text"
                onChange={onChange}
                value={search}
                background= {primaryColor}
            />
                <SearchBarButton onClick={console.log('searching')}  background={secondaryColor}>find</SearchBarButton>
                </SearchBarContainer>
            <SearchBarOutput>Search output: {search}</SearchBarOutput>
         </>
    );
}

export default SearchBar;
