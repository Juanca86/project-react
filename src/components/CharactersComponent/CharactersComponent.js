import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/characters/action";
import { Card, Container } from "react-bootstrap";
import { computeHeadingLevel } from "@testing-library/react";

const CharactersComponent = () => {
  const dispatch = useDispatch();
  const { characters, loadingCharacters } = useSelector(
    (state) => state.CharactersReducer
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Container>
      {characters.map((character) => {
        console.log(characters, 'characters')
        return (
          <Card>
            <Card.Title>{character.name}</Card.Title>
            <Card.Img>{character.image}</Card.Img>
          </Card>
        );
      })}
    </Container>
  );
};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
