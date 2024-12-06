import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Ataque a los Titanes']);


const agregarCategoria = (newCategory) => {
                                              //ESTA FUNCION DE FLECHA ES PARA AGREGAR UNA NUEVA 
if(categories.includes(newCategory)) return;  // CATEGORIA A CATEGORIES OSEA AL USESTATE DE ARRIBA     

setCategories ([newCategory, ...categories]);


};



  return (
    <>
    
    {/*Titulo */}
    <h1>GifExpertApp</h1>


     {/*Input */}
        
     <AddCategory 
     
   // agregarNewCategoria = {setCategories}

    // onNewCategory es una propiedad , puedes crear tantas propiedades como lo desees
    onNewCategory = {e => agregarCategoria (e) }
     
     />
    

    
     {/*Listado de gif */}
    { /* <button onClick={agregarCategoria}>boton</button> */}

    

      {
      
      categories.map(anime => 
       
        <GifGrid key={anime}
        anime={anime}/>
        
      )
      
    }

     {/*Gif Item*/}

     </>
 
  )
  };



// repaso 
/*
export const Movies = ()=>{

  const [peliculas, setpeliculas] = useState (['Los juegos del hambre', 'Maze runner']);


  const nuevaPelicula = () => {

    setpeliculas([...peliculas, 'it']);
  };


return(

  <>

  <ol>
    {peliculas.map(peli => {
      return <li key={peli}>{peli}</li>
    })}
  </ol>

<button onClick={nuevaPelicula}>boton</button>


 </>

);


  };

*/
 