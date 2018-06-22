import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

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
          <Grid.Column>A Big Ol' Blog</Grid.Column>
          <Grid.Column>
            <i className="pencil alternate icon" />
            CREATE POST
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Header>
  );
};

export default Navbar;
