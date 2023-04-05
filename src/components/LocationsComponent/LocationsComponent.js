import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/locations/action";
import { Card, Container } from "react-bootstrap";

const LocationsComponent = () => {
  const dispatch = useDispatch();
  const { results, loadingLocations } = useSelector(
    (state) => state.LocationsReducer
  );
  useEffect(() => {
    dispatch(getLocations());
  }, []);

  return (
    <Container>
      {results.map((results) => {
        return (
          <Card>
            <Card.Title>{results.name}</Card.Title>
            <Card.Text>{results.dimension}</Card.Text>
          </Card>
        );
      })}
    </Container>
  );
};

LocationsComponent.propTypes = {};

LocationsComponent.defaultProps = {};

export default LocationsComponent;
