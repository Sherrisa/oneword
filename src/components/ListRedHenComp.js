import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { REDHEN } from "../data/REDHEN";

export class ListRedHen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redhen: REDHEN,
    };
  }

  render() {
    const mostFrequent = this.state.redhen.slice(0, 18);
    const frequent = this.state.redhen.slice(18, 36);
    const lessFrequent = this.state.redhen.slice(36, 54);
    const infrequent = this.state.redhen.slice(54);

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
          <h3>The Little Red Hen</h3>
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