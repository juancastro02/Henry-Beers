import axios from 'axios'

//Estado inicial

const InicialState = {
    carrito:[]
}

//Constantes

const GET_CARRITO = 'GET_CARRITO'

//Reducer

export default function carritoReducer(state = InicialState, action) {
    switch (action.type) {
        case GET_CARRITO:
            return {...state, carrito: action.payload} 
        default: return state
    }
}


//Action

export const getcarrito = (id) => async (dispatch, getState) => {

    try {

      const {data} = await axios.get(`http://localhost:4000/users/${id}/carritos`)
        dispatch({
            type: GET_CARRITO,
            payload: data
        })
    } catch (error) {
        console.log(error)
    } 

}