import React, { useState, useEffect } from 'react';
import '../styles/about.css';

const Pokemon = ({name,image}) => {
    return (
        <div>
            <h3>name = {name}</h3>
            <img src={image} alt=""/>
        </div>
    )
};

const About = () => {

    const [pokemon, setPokemon] = useState([]);

    //`http://pokeapi.co.api/v2/pokemon/25/`;

    useEffect(() => {
        getApi();
    }, [])


    const getApi = async () => {
        const response = await fetch(`http://pokeapi.co/api/v2/pokemon/25/`);
        const data = await response.json();
        console.log(data);
        setPokemon([data]);
    };

    //sprites.front_default

    return (
        <div>
            {<div>{pokemon.map(poke => (
                <Pokemon name={poke.species.name} image={poke.sprites.front_default}/>
            ))}</div>}
        </div>
    );
}

export default About;