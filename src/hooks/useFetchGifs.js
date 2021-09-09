// con el hook a diferencia del functional component, no necesito
// hacer el import de react a menos que retornemos JSX

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect( () => {
    getGifs( category )
      .then( imgs =>{
        console.log(imgs)
        setState({
          data: imgs,
          loading: false
        });
      })
  }, [category])

  // setTimeout(() =>{
  //   setState({
  //     data: [1,2,3,4,5],
  //     loading: false
  //   })
  // }, 3000);

  return state; // { data:[], loading: true };
}