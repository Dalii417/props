// MonComposant.js
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// Définir le composant fonctionnel
const Player = ({ player }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={player.image} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>{player.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Nationality : {player.Nationality}</ListGroup.Item>
        <ListGroup.Item>Date of birth : {player.Birth}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

// Exporter le composant pour pouvoir l'utiliser ailleurs
export default Player;
