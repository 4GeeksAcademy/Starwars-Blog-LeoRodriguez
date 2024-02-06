import React , {useState}from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CharacterCard (){
    
    const [characters, setCharacters] = useState([])
    const characterId = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    function getCharacterInfo(){
            fetch('https://www.swapi.tech/api/people/1' )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCharacters(data);
                console.log(characters)
            })
            .catch(err => console.error(err))
         
    }


    return(
        <div>
	<Card style={{ width: '18rem' }}>
	<Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
	<Card.Body>
	  <Card.Title>Luke Skywalker</Card.Title>
	  <Card.Text>
		Some quick example text to build on the card title and make up the
		bulk of the card's content.
	  </Card.Text>
	  <Button variant="primary" onClick={getCharacterInfo}>Go somewhere</Button>
	</Card.Body>
  </Card>
  </div>
    )
}

export default CharacterCard;