import axios from 'axios'
 

//Inicial State

const InicialState = {
    beers: [],
    beer: []
}

//Constantes 

const GET_BEERS = 'GET_BEERS'
const GET_BEER = 'GET_BEER'
const UPDATE_BEER = 'UPDATE_BEER'

//Reducer
export default function beerReducer(state = InicialState, action) {
    switch (action.type) {
        case GET_BEER:
            return {...state, beer: action.payload}
        case GET_BEERS:
            return { ...state, beers: action.payload }  
        case UPDATE_BEER:
            return {...state, payload: action.payload}      
        default: return state
    }
}

//Action

export const getbeers = () => async (dispatch, getState) => {

    try {

      const {data} = await axios.get(`http://localhost:4000/products`)
        dispatch({
            type: GET_BEERS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    } 

}

export const getcerveza =(id)=> async (dispatch)=>{
    try {
        
        const res = await axios.get(`http://localhost:4000/products/${id}`)
        dispatch({
            type: GET_BEER,
            payload: res.data
        })

    } catch (error) {
        console.log(error)
    }
}


export const updatebeer = (id, name, description, price, stock, image)=>(dispatch)=>{

    try {
      const info = {
          name: name,
          description: description,
          price: price, 
          stock: stock,
          image: image
      }
 
      const {data} = axios.update(`http://localhost:4000/products/update/${id}`, info)
      console.log(data) 
      dispatch({
          type: UPDATE_BEER,
          payload: data
      })
    } catch (error) {
        console.log(error)
    }
}