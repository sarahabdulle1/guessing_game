import CharacterList from '../components/CharacterList';
import { useState, useEffect } from 'react';
import Character from '../components/Character';

const CharactersContainer = () => {

    // declare state
    const [characters, setCharacters] = useState([]);
    const [guess, setGuess] = useState("");

    // fetch the countries
    const grabCharacters = async () => {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const jsonData = await response.json();
        const characters = jsonData;

        setCharacters(characters);
    }   

    // grab all characters as a default
    useEffect(() => {
        grabCharacters();
    }, [])


    // guess logic
    // update guess to correct 
    const correctGuess = () => {
        const para = <h3 id="correct" style={{color: '#2EC20A' }}>CORRECT!!</h3>;
        setGuess(para)
    }
      
    // update guess to incorrect 
    const incorrectGuess = () => {
        const para = <h3 id="incorrect"style={{color: 'red'}}>INCORRECT</h3>;
        setGuess(para)
    }

    return ( 
        <>
            <h1 id="heading"> <i>The Harry Potter House Quiz</i> </h1>
            <h2 id="heading">Which House are they from?</h2>
            <CharacterList 
                characters={characters} 
                setGuess={setGuess} guess={guess}
                incorrectGuess={incorrectGuess}
                correctGuess={correctGuess}
            />
        </>
     );
}
 
export default CharactersContainer;