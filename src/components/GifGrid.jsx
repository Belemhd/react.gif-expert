// import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// import { obtenerGifs } from "../helpers/obtenerGifs";


export const GifGrid = ({anime}) => {
  
const { images, isLoading} = useFetchGifs(anime);


    return (
       <>
   
   <h3>{anime }</h3>
  
{
  isLoading && (<h2>Cargando...</h2>)
}

  <div className="card-grid">

    {

      images.map((image) =>(

        <GifItem 
        key={image.id}
        {...image}
        
        
        />
      
))
    }
  </div>


       </>
     )
   };

 
   
   