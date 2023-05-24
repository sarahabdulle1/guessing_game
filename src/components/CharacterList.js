import Character from "./Character";

const CharacterList = ({characters, guess, setGuess,incorrectGuess, correctGuess }) => {

    // map all data which doesn't have an empty house
    const characterComponents = characters.filter((character) => {
            if(character.house !== "" && character.image !== ""){ 
                return character}
        })
        .map((character) => {
            return <Character character={character} guess={guess} setGuess={setGuess}
            incorrectGuess={incorrectGuess} correctGuess={correctGuess} /> 
    });
    
    // // grab a single character 
    // const grabSingleCharacter = () => {
    //     const randomHouse = randomHouses[Math.floor(Math.random() * randomHouses.length)]
    // }

    return ( 
        <>
            {characterComponents}
        </>
     );
}
 
export default CharacterList;