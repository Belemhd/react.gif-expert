import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('');


const changeInput = ({target}) => {

setInputValue(target.value)

};


const onSubmit = (e) => {

   e.preventDefault();

   if(inputValue.trim().length <= 1 ) return;

   onNewCategory(inputValue.trim());
   // agregarNewCategoria(categories => [...categories, inputValue]);

   setInputValue(" ");

    
};

  return (
<form onSubmit={(e) => onSubmit (e) }>
<input 
    type="text" 
    placeholder="Buscar Gifs"
    value={inputValue}
    onChange={changeInput}

 />

</form>
 
  )
};


