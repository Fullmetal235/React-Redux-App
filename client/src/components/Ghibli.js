import React from 'react';
import styled from 'styled-components';

const FilmTitle = styled.h2`
font-size: 1.8rem;
color: white;
`
const Director = styled.p`
font-style: italic
`
const FilmStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: space-between;
margin-left: 400px;
margin-right: 400px;
background: -webkit-linear-gradient(to right, #00f260, #0575e6); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #00f260, #0575e6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
opacity: 0.85;
border-radius: 20px;
margin-top: 8px;
padding: 10px;
`

const Ghibli = props => {
    return (
        <FilmStyle>
            <FilmTitle>{props.Ghibli.title}, {props.Ghibli.release_date}</FilmTitle>
            <Director>Director: {props.Ghibli.director}</Director>
            <p>{props.Ghibli.description}</p>
        </FilmStyle>
    )
}

export default Ghibli;