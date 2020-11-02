import React, { useState } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
// import "../../index.css";

const SearchBar = ({ setBusquedaApp }) => {

  console.log(setBusquedaApp)

  const [search, setSearch] = useState();

  const handleChange = (e) => {
    // e.target.value.toLowerCase();
    setSearch(e.target.value);
  };

  async function handleSubmit (){
    console.log(search);
    if (!search) {
     return alert("Ingrese una busqueda valida");
    }
    const {data} = await axios.get(`http://localhost:4000/products/find/search?name=${search}`)
    console.log(data)
    setBusquedaApp({
        array: data,
        word: search,
    });
  };

  return (
    // <form onSubmit={(e)=>handleSubmit(e)}  >
    //   <div>
    //       <input name='search' type='text' onChange={(e)=>handleChange(e)} />
    //        <Link to={`/products/search?name=${search}`} ><button type='submit' onClick={(e)=>handleSubmit(e)}  style={{backgroundColor: "black",color: "white", borderRadius: "10px", border: "0px" }} ><SearchIcon/></button></Link>
    //   </div>
    // </form>
    <div className="searchbar">
      <form className ="searchform" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name='search' className="inputsearch" onChange={(e)=>handleChange(e)}/>
        <Link to={`/products/search?name=${search}`} ><i onClick={(e)=>handleSubmit(e)} className="fa fa-search"></i></Link>
      </form>
    </div>
  );
};

export default SearchBar;
