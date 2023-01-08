import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    //Traemos un objeto vacio lo guardamos
    const [formState, setFormState] = useState( initialForm )
    // {
    //     username: 'francisco',
    //     email: '',
    //     password: ''
    // }

    //Cambiamos el objeto 
    const onInputChange = ({target}) => {
      const {name, value} = target;
      
      setFormState({
        ...formState,
        [name]: value        
        
      })
      
    }
    //Reset al obj
    const onResetForm = () => { 

        setFormState(initialForm)

    }

  return{
    //DEsestructura y lo expone a fuera 
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
