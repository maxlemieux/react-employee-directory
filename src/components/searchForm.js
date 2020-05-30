import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

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
    <Container>
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
