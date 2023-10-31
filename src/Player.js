import React from "react";
import Card from "react-bootstrap/Card";

// objet palyer qui contient des props
 
const Player = ({name,team,nationality,jerseyNumber,age,image}) => {




    return (
// insertion des {props} dans la card

        <Card style={{ width: '18rem', margin: "20px",backgroundColor:"#e9ecef"}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>  
          <Card.Text>
          <strong> Age:</strong> {age} <br/> 
          <strong >Team : </strong> {team} <br/>
          <strong >Nationality : </strong> {nationality} <br/>
          <strong >Jersey Number :  </strong> {jerseyNumber} <br/>
      
          </Card.Text>
         
        </Card.Body>
      
      </Card>
    )


}
export default Player;