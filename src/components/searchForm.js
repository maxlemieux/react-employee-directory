import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchForm extends Component {
  state = {
    search: "",
  };

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
          <TextField 
            variant='outlined'
            label='Search'
            name='search'
            onChange={this.handleInputChange}
            // value={this.state.search}
          />
    );
  }
}

export default SearchForm;
