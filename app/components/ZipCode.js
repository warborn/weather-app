import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ZipCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => {
      return {
        zipcode: value
      } 
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.zipcode);
  }

  render() {
    return (
      <form className='zipcode-container' onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.zipcode} onChange={this.handleChange} placeholder={this.props.placeholder}/>
        <button>Get Weather</button>
      </form>
    )
  }
}

ZipCode.propTypes = {
  placeholder: PropTypes.string.isRequired
}

ZipCode.defaultProps = {
  placeholder: 'St. George, Utha'
}

export default ZipCode