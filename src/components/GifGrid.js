import React from 'react' //, { useState, useEffect } le saco esto xq voy a trabajar en el custom hook
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {
  
  // const [count, setCount] = useState(0);
  // const state = useFetchGifs();
  const { data:images, loading} = useFetchGifs( category );
  // con data:images como quien dice renombro a data y luego puedo llamarlo como images
  //const [images, setImages] = useState([]);

  // useEffect( () => {
  //   getGifs( category )
  //     .then( imgs => setImages( imgs )); // esto es lo mismo que .then(setImages)
  // }, [ category ]) // con el [] le estoy diciendo que solo quiero que se ejecute la instrucción cuando el componente es renderizado por 1ra vez

  return (
    <>
      <h3 className="animate__bounceInRight"> {category} </h3>
      {/* { loading ? 'Cargando...' : 'Fin de carga' } */}
      { loading && <p className="animate_animated animate_flash">'Cargando...'</p> }  
      {/* con el && solo evalua el 1ro si es true y con el false no hace nada */}
      <div className="card-grid">
        {
          images.map( img => (  //antes del custom hook era images.map, despues de la asignacion data:images puedo volver a usar images
            <GifGridItem 
              key={ img.id }
              {...img}
              // img={ img } 
            />
          ))
        }     

        {/* <ol>
          {
            images.map( img => (
              <li key={ img.id }> { img.title } </li>
            ))
          }
          ####################################
          aca tb puedo desestructurar y hacer 
            images.map( { id, title } => (
              <li key={ 
                id }> { title } </li>
            )) 
          ######################################  
        </ol> 
           <h3> { count } </h3>
        <button onClick={ ()=> setCount( count + 1 ) }></button>*/}
      </div> 
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

