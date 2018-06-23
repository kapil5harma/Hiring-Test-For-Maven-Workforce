import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const blackDivOnTop = {
    minHeight: '10px',
    height: '10px',
    width: '100%',
    background: 'black',
    marginBottom: '5px'
  };

  const bottomShadow = {
    boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.2)'
  };

  return (
    <Header style={bottomShadow} as="h3" dividing>
      <div style={blackDivOnTop} />
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Link className="nav-link" to="/">
              A Big Ol' Blog
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link className="nav-link" to="/create-post">
              <i className="pencil alternate icon" />
              CREATE POST
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Header>
  );
};

export default Navbar;
