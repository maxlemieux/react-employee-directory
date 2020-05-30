import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
     <Grid>
        <Grid item xs={12}>
          <TextField 
            variant='outlined'
            label='Search'
            name='search'
            onChange={this.handleInputChange}
            // value={this.state.search}
          />
        </Grid>
      </Grid>
    );
  }
}

export default SearchForm;
