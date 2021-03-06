import React, { Component } from 'react';

import { Container, Card } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

const API = 'https://jsonplaceholder.typicode.com/posts';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount = () => {
    fetch(API)
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    const ColorCard = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 150px;

      ${props =>
        props.color === 'green' &&
        css`
          background: green;
        `};

      ${props =>
        props.color === 'darkgray' &&
        css`
          background: darkgray;
        `};
      ${props =>
        props.color === 'orange' &&
        css`
          background: orange;
        `};
      ${props =>
        props.color === 'paleturquoise' &&
        css`
          background: paleturquoise;
        `};
      ${props =>
        props.color === 'lightgreen' &&
        css`
          background: lightgreen;
        `};
      ${props =>
        props.color === 'palevioletred' &&
        css`
          background: palevioletred;
        `};
      ${props =>
        props.color === 'blanchedalmond' &&
        css`
          background: blanchedalmond;
        `};
      ${props =>
        props.color === 'pink' &&
        css`
          background: pink;
        `};
      ${props =>
        props.color === 'yellow' &&
        css`
          background: yellow;
        `};
      ${props =>
        props.color === 'wheat' &&
        css`
          background: wheat;
        `};
    `;

    const ellipsis = {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    };
    let color;

    const setBackgroundColor = id => {
      switch (id % 10) {
        case 0:
          color = 'green';
          break;
        case 1:
          color = 'paleturquoise';
          break;
        case 2:
          color = 'palevioletred';
          break;
        case 3:
          color = 'wheat';
          break;
        case 4:
          color = 'orange';
          break;
        case 5:
          color = 'yellow';
          break;
        case 6:
          color = 'pink';
          break;
        case 7:
          color = 'blanchedalmond';
          break;
        case 8:
          color = 'lightgreen';
          break;
        default:
          color = 'darkgray';
          break;
      }
    };

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container textAlign="left">
          <Card.Group itemsPerRow={3}>
            {items.map(item => {
              return (
                <Card key={item.id}>
                  {setBackgroundColor(item.id)}
                  <ColorCard color={color}>150 X 150</ColorCard>
                  <Card.Content>
                    <Card.Header style={ellipsis}>{item.title}</Card.Header>
                    <Card.Meta style={ellipsis}>{item.title}</Card.Meta>
                    <Card.Description style={ellipsis}>
                      {item.body}
                    </Card.Description>
                  </Card.Content>{' '}
                </Card>
              );
            })}
          </Card.Group>
        </Container>
      );
    }
  }
}

export default Landing;
