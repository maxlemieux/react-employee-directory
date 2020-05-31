import React, { Component } from 'react';
// import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
import AppHeader from './AppHeader';
// import { handleInputChange } from '../utils/search.js';

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
      <AppHeader searchFunc={this.handleInputChange} />
    );
  }
}

export default SearchForm;
