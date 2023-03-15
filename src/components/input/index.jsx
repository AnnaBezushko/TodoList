import React from 'react';
// import './App.css';
import './index.css'

class Input extends React.Component  {
  render(){
    const { value, onChange } = this.props;
    return (
      <input type="text"
      className='input'
      value={value}
      onChange={onChange}
      />
    )
  }
}

export default Input;
