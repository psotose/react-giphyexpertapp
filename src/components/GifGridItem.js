import React from 'react'
import PropTypes from 'prop-types';

const GifGridItem = ( {title, url} ) => {  // se pone props en vez de img xq es lo que es en relidad ( props )
                                          // pero si desestructuro es mas facil de leer
  
  // console.log({id, title, url});
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p> { title } </p>  
      {/* { img.title } */}
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
export default GifGridItem;
