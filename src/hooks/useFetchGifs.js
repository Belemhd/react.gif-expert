import { useEffect, useState } from "react";
import { obtenerGifs } from "../helpers/obtenerGifs";

export const useFetchGifs = (anime) => {

    const [images, setImages] = useState([]); //estado Local de un componente
    const[isLoading, setIsloading] = useState(true)

    const getImages = async () => {
    const newImages = await obtenerGifs(anime);
   setImages(newImages);
   setIsloading(false);
    };
  
  
  useEffect(()=>{
  
    getImages();
  
  
  }, []);
  


  return {

   images: images,
   isLoading: isLoading

  }
}


