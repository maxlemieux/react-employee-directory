const handleInputChange = event => {
  let value = event.target.value;
  const name = event.target.name;
  this.setState({
    [name]: value
  });
  this.props.handleSearchFilter(value)
};

export {
  handleInputChange,
}