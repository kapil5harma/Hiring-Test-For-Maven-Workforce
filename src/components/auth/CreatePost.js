import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Container
} from 'semantic-ui-react';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      website: '',
      redirectToNewPage: false,
      errors: {
        name: false,
        email: false,
        phone: false,
        website: false
      },
      submitteData: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {};

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const postedData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      website: this.state.website
    };

    this.handleValidation();
    if (this.handleValidation()) {
      // Show submitted data
      this.setState({ redirectToNewPage: true, submitteData: postedData });
    }
  }

  handleValidation() {
    let fields = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      website: this.state.website
    };
    let errors = this.state.errors;

    //Name
    if (!fields.name) {
      errors.name = true;
    } else if (typeof fields.name !== 'undefined') {
      if (!fields.name.match(/^([a-z']+(-| )?)+$/i)) {
        errors.name = true;
      } else {
        errors.name = false;
      }
    }

    //Email
    if (!fields.email) {
      errors.email = true;
    } else if (typeof fields.email !== 'undefined') {
      let lastAtPos = fields.email.lastIndexOf('@');
      let lastDotPos = fields.email.lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields.email.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          fields.email.length - lastDotPos > 2
        )
      ) {
        errors.email = true;
      } else {
        errors.email = false;
      }
    }

    //Phone Number
    if (!fields.phone) {
      errors.phone = true;
    } else if (typeof fields.phone !== 'undefined') {
      if (!fields.phone.match(/^[789]\d{9}$/)) {
        errors.phone = true;
      } else {
        errors.phone = false;
      }
    }

    //Website
    if (!fields.website) {
      errors.website = true;
    }
    if (typeof fields.website !== 'undefined') {
      if (
        !fields.website.match(
          /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        )
      ) {
        errors.website = true;
      } else {
        errors.website = false;
      }
    }

    this.setState({ errors: errors });
    if (
      this.state.errors.name === false &&
      this.state.errors.email === false &&
      this.state.errors.phone === false &&
      this.state.errors.website === false
    ) {
      return true;
    } else return false;
  }

  render() {
    if (this.state.redirectToNewPage) {
      return (
        <div>
          <Grid textAlign="center" style={{ height: '100%', marginTop: '5%' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Container textAlign="left">
                <Header style={{ marginBottom: '10%' }} as="h2">
                  {this.state.submitteData.name}
                </Header>
                <Header
                  as="h5"
                  content={this.state.submitteData.email}
                  icon="envelope"
                />
                <Header
                  as="h5"
                  content={this.state.submitteData.phone}
                  icon="phone"
                />
                <Header
                  as="h5"
                  content={this.state.submitteData.website}
                  icon="laptop"
                />
              </Container>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
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
                  placeholder="Full Name"
                  autoComplete="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={this.state.errors.name}
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
                  error={this.state.errors.email}
                />
                <Form.Input
                  fluid
                  name="phone"
                  icon="phone"
                  iconPosition="left"
                  placeholder="10 digit mobile number"
                  type="phone"
                  autoComplete="tel"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={this.state.errors.phone}
                />
                <Form.Input
                  fluid
                  name="website"
                  icon="laptop"
                  iconPosition="left"
                  placeholder="Website (https://www.kapil5harma.com)"
                  type="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={this.state.errors.website}
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
