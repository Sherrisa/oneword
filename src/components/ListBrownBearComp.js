import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BROWNBEAR } from "../data/BROWNBEAR";

export class ListBrownBear extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brownbear: BROWNBEAR,
    };
  }

  render() {
    const mostFrequent = this.state.brownbear.slice(0, 8);
    const frequent = this.state.brownbear.slice(8, 16);
    const lessFrequent = this.state.brownbear.slice(16, 24);
    const infrequent = this.state.brownbear.slice(24);

    const renderMostFrequent = mostFrequent.map((list) => {
      return <div key={list.id}>{list.word}</div>;
    });

    const renderFrequent = frequent.map((list) => {
      return <div key={list.id}>{list.word}</div>;
    });

    const renderLessFrequent = lessFrequent.map((list) => {
      return <div key={list.id}>{list.word}</div>;
    });

    const renderInfrequent = infrequent.map((list) => {
      return <div key={list.id}>{list.word}</div>;
    });

    return (
      <Container className="dataBox">
        <Row>
          <h3>Brown Bear, Brown Bear</h3>
        </Row>
        <Row>
          <Col className="data">{renderMostFrequent}</Col>
          <Col className="data">{renderFrequent}</Col>
          <Col className="data">{renderLessFrequent}</Col>
          <Col className="data">{renderInfrequent}</Col>
        </Row>
      </Container>
    );
  }
}