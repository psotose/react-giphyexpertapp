import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   // setCategories( [...categories, 'HunterXHunter'] );
  //   setCategories( categories => [...categories, 'HunterXHunter' ] );
  // };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories= { setCategories }/>  
      <hr />

      {/* <button onClick={ handleAdd } >Agregar</button> */}
      <ol>
        {
          categories.map( category =>
            <GifGrid 
              key={category}
              category={ category } 
            />
            // {return <li key={ category }> { category } </li>} si le saco las llaves de afuera y el return, lo retorna =
          )
        }
      </ol>
    </div>
  )
}



