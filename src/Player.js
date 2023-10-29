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
          <p>{age}</p> 
          <p>{team}</p> 
          <p>{nationality}</p>
          <p>{jerseyNumber}</p>
          </Card.Text>

         
        </Card.Body>
      
      </Card>
    )


}
export default Player;