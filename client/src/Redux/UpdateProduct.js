import axios from 'axios'

//Estado inicial

const InicialState = {
    product: []
}

//Constantes 

const PUT_PRODUCT = 'PUT_PRODUCT'


//Reducer

 export default function productReducer(state = InicialState, action){
  switch(action.type){
      case PUT_PRODUCT: 
        return {...state, product: action.payload }
      default: return state  
  }
 }

//Action

export const putproduct = ()=> async(dispatch)=>{

   try {
       const {data} = await axios.get('http://localhost:4000/category')
       dispatch({
           type: PUT_PRODUCT,
           payload: data
       })
   } catch (error) {
       console.log(error)
   }
}