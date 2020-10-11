import React, {useState} from 'react'
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'


const SearchBar = ({setSearchApp}) =>{
    const [search, setSearch] = useState()

    const handleChange=(e)=>{
     e.target.value.toLowerCase()   
     setSearch(e.target.value)
 }

    const handleSubmit= async ()=>{
        console.log(search)
        if(!search){
            alert('Ingrese una busqueda valida')
        }
 
        search.toLowerCase()
        const {data} = await axios.get(`http://localhost:4000/products/find/search?name=${search}`)
        console.log(data)
        setSearchApp({
            array: data,
            word: search,
        });
 
 }
 

    return(
        <form onSubmit={(e)=>handleSubmit(e)}  >
          <div>
              <input name='search' type='text' onChange={(e)=>handleChange(e)} />
              <Link to={`/products/search?name=${search}`} ><button type='submit' onClick={(e)=>handleSubmit(e)} ><SearchIcon/></button></Link>
          </div>
        </form>
    )
}


export default SearchBar
