import React, {useState} from 'react'
import './CrudCategory.css'

const CrudCategory =()=>{

    const[category, setCategory] = useState({
        name: "",
        description: ""
    });
    
    const {name, description} = category
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(category)
        alert('Enviado!')
    }

    const handleChange = e =>{
        setCategory({
            ...category,
            [e.target.name] : e.target.value
        })
        console.log(e.target)
        console.log(e)
    }
    

    return(
        <div className='formCrudCategory' >
         <form onSubmit={(e) => handleSubmit(e) }>
             <h6>Name</h6>
          <input type='text'   value={name} onChange={handleChange}  name='name'  /> 
             <h6>Description</h6>
          <input type='text'   value={description}  onChange={handleChange}  name='description'/><br/><br/>
          <button type='submit'>Crear Categoria</button>     
        </form>   
        </div>
    )
}

export default CrudCategory