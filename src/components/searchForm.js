import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

class SearchForm extends Component {
  state = {
    search: "",
  };

  style = {
    margin: '10px auto 10px',
    textAlign: 'center',
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    this.props.handleSearchFilter(value)
  };

  render() {
    return (
      <Container
        style={this.style}
      >
        <TextField 
          variant='outlined'
          label='Search'
          name='search'
          onChange={this.handleInputChange}
          // value={this.state.search}
        />
      </Container>
      
    );
  }
}

export default SearchForm;
