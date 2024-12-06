
export const obtenerGifs = async(anime) => {
const url = `https://api.giphy.com/v1/gifs/search?api_key=OaV07X4ZXZu4tqCEErS2p3w4T8lr4tUd&q=${anime}&limit=10`
   
const resp = await fetch(url);
   const {data} = await resp.json();
   
   
   const gifs = data.map(img => ({
   id: img.id,
   title: img.title,
   url: img.images.downsized_medium.url
   
   }));
   
return gifs;

   
   };
  