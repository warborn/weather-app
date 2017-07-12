import React, { Component} from 'react';
import PropTypes from 'prop-types';

class CityInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => {
      return {
        city: value
      } 
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    let { city } = this.state;
    if(city === '') {
      city = 'St. George, Utha';
    }

    this.props.onSubmit(city);
    this.setState(() => {
      return {
        city: ''
      }
    })
  }

  render() {
    return (
      <form className='city-container' onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.city} onChange={this.handleChange} placeholder={this.props.placeholder}/>
        <button>Get Weather</button>
      </form>
    )
  }
}

CityInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

CityInput.defaultProps = {
  placeholder: 'St. George, Utha'
}

export default CityInput