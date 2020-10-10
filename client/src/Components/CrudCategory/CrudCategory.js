import React, {useState} from 'react'
import axios from 'axios'
import './CrudCategory.css'

const CrudCategory =()=>{

    const[category, setCategory] = useState({
        name: "",
        description: ""
    });
    
    const {name, description} = category
    
    const handleSubmit = e => {
        e.preventDefault()
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
    

    const addCategory = async() =>{
        const info = {
            name: category.name,
            description: category.description
        }
           const {data} = await axios.post('http://localhost:4000/category/create', info)
           console.log(data)
       }
   
   

    return(
        <div className='formCrudCategory' style={{marginLeft: "350px"}} >
    
         <form onSubmit={(e) => handleSubmit(e) }>
             <h6>Name</h6>
          <input type='text'   value={name} onChange={handleChange}  name='name'  /> 
             <h6>Description</h6>
          <input type='text'   value={description}  onChange={handleChange}  name='description'/><br/><br/>
          <button type='submit' onClick={()=> addCategory()} >Crear Categoria</button>        
        </form>   
        </div>
    )
}

export default CrudCategory