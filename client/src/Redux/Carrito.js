import axios from "axios";

//Estado inicial

const InicialState = {
  carrito: [],
  ordenes:[],
  orden:[],
  ordenCompra:[]
};

//Constantes

const GET_CARRITO = "GET_CARRITO";
const GET_ORDEN = "GET_ORDEN";
const GET_PEDIDO = "GET_PEDIDO"
const POST_CHECKOUT = "POST_CHECKOUT"
//Reducer

export default function carritoReducer(state = InicialState, action) {
  switch (action.type) {
    case GET_CARRITO:
      return { ...state, carrito: action.payload };
    case GET_ORDEN:
      return { ...state, ordenes: action.payload };
      case GET_PEDIDO:
      return { ...state, orden: action.payload };
      case POST_CHECKOUT:
        return {
          ...state, ordenCompra: action.payload
        } 
    default:
      return state;
  }
}

//Action

export const getcarrito = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/users/${id}/carritos`
    );
    dispatch({
      type: GET_CARRITO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOrdenes = () => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/users/get`
      );
      dispatch({
        type: GET_ORDEN,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getPedido = (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/users/orden/${id}`
      );
      dispatch({
        type: GET_PEDIDO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

 /*  export const postCheckout = (userId, Id) => async (dispatch) => {
    
    try {
      const { data } = await axios.post(`http://localhost:4000/users/${userId}/carritos/${Id}`)
      dispatch({
        type: POST_CHECKOUT,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  } */
  
  //::::::::::::::::::::::::::::::::::::::::::::


  //:::: Inicial state


const initialState = {
  userCarritos: []
}

//::: Constantes

const GET_CARRITOS = "GET_CARRITOS";


//:::Reducer

export function activityReducer (state= initialState, action) {

  switch (action.type) {
      case GET_CARRITOS:
          return { ...state, userCarritos: action.payload };
  }

}


//:::::Action

export const getcarritos = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/users/carrito/${id}` // A la ruta de get carritos de todos los usuarios
    );
    dispatch({
      type: GET_CARRITO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
