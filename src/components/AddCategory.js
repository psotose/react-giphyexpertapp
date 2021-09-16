import React, { useState }from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue] = useState(''); // si lo dejo vacío el estado es undefined

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length > 2 ) {
      setCategories( categories => [ inputValue, ...categories ] );
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      {/* <h1> { inputValue } </h1> */}
      <p> { inputValue } </p>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
  
}
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
