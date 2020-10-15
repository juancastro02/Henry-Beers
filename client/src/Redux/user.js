import axios from "axios";

//Inicial State

const InicialState = {
  users: [
    {
      name: "",
      userName: "",
      email: "",
      // "password":"",
      // "isAdmin":
    },
  ],
};

//Constantes

const GET_USERS = "GET_USERS"; //trae todos los usuarios
const POST_USERS = "POST_USERS"; //crea usuarios
const DELETE_USERS = "DELETE_USERS"; //Borra un usuario
const UPDATE_USERS = "UPDATE_USERS"; //actualiza un usuario

//Reducer
export default function usersReducer(state = InicialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }; //---> case: POST, DELETE Y UPDATE, LO PROBEMOS
    default:                                      //DIRECTAMENTE EN NuevaCuenta.js
      return state;
  }
}

//Action

export const getUsers = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/users/usuarios`);
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(`http://localhost:4000/users`);
    dispatch({
      type: POST_USERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.put(`http://localhost:4000/users`);
    dispatch({
      type: UPDATE_USERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getcerveza =(id)=> async (dispatch)=>{
//     try {

//         const res = await axios.get(`http://localhost:4000/products/${id}`)
//         dispatch({
//             type: GET_BEER,
//             payload: res.data
//         })

//     } catch (error) {
//         console.log(error)
//     }
// }
