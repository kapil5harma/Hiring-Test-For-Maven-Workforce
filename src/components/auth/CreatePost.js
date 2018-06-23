import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      website: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {};

  onChange(e) {
    console.log('e: ', e);
    console.log('onChange');
    this.setState({ [e.target.name]: e.target.value });
    console.log('e.target.name: ', e.target.name);
    console.log('e.target.value: ', e.target.value);
  }

  onSubmit(e) {
    console.log('onSubmit');
    e.preventDefault();
    const postedData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      website: this.state.website
    };
    console.log('postedData: ', postedData);
  }

  render() {
    return (
      <div className="create-post">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Create a Post
            </Header>
            <Form size="large" onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  name="name"
                  icon="user"
                  iconPosition="left"
                  placeholder="Name"
                  autoComplete="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  // error={errors.name}
                />
                <Form.Input
                  fluid
                  name="email"
                  icon="envelope"
                  iconPosition="left"
                  placeholder="E-mail address"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  // error={errors.name}
                />
                <Form.Input
                  fluid
                  name="phone"
                  icon="phone"
                  iconPosition="left"
                  placeholder="Phone"
                  type="phone"
                  autoComplete="tel"
                  value={this.state.phone}
                  onChange={this.onChange}
                  // error={errors.name}
                />
                <Form.Input
                  fluid
                  name="website"
                  icon="laptop"
                  iconPosition="left"
                  placeholder="Website"
                  type="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  // error={errors.name}
                />

                <Button type="submit" color="teal" fluid size="large">
                  Create Post
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default CreatePost;
