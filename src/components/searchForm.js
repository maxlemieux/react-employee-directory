import React, { Component } from 'react';
import { Container, TextField } from '@material-ui/core';

class SearchForm extends Component {
  state = {
    search: "",
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    // if (name === 'password' && value.length > 15) {
    //   alert('foo')
    //   value=value.substring(0,14)
    // }
    this.setState({
      [name]: value
    });
    this.props.handleSearchFilter(value)
  };

  render() {
    return (
      <Container maxWidth="lg">
        <form className="form">
          <TextField 
            variant='outlined'
            label='Search'
            onChange={this.handleInputChange}
            // value={this.state.search}
        />
        </form>
      </Container>
    );
  }
}

export default SearchForm;
