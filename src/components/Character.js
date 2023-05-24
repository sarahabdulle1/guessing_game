import { useState } from 'react';

 
const Character = ({character, guess, setGuess, incorrectGuess, correctGuess}) => {


    const houses= ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]

  // get wrong house, given a character's house
    const incorrectHouse = (character) => {
        const randomHouses = houses.filter((house)=> {
          if(house !== character.house){
            return house;
          }})
          const randomHouse = randomHouses[Math.floor(Math.random() * randomHouses.length)]
          return randomHouse;
    }

    return (
        <>
          <div id="character">

               <h1 id="name">{character.name.toUpperCase()}</h1>
               <img src={character.image} id="img"/>

               <input 
                  id="loadNext" 
                  type="button" 
                  value=">"
                  // onClick={loadNextCharacter}
                />
                
                <input type="button" id="incorrectGuessButton" 
                  onClick={incorrectGuess}
                  value={incorrectHouse(character)}
                />

                <input 
                  type="button"
                  id="correctGuessButton"
                  onClick={correctGuess}
                  value={character.house}
                />
                
                <h3 id="guessOutcome">{guess}</h3>

          </div>
        </>
      );
}
 
export default Character;