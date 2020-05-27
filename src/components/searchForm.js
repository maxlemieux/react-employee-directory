import React, { Component } from 'react';

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
      <div>
        <form className="form">
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
