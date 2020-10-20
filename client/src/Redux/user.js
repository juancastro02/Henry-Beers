import axios from "axios";

//Inicial State

const InicialState = {
  users: [],
  user: {
    id: "",
    email: "",
    password: "",
    isAdmin: false
  },
};

//Constantes

const POST_USER = "POST_USER"
const SET_USER = 'SET_USER'
const ERROR_LOGIN = 'ERROR_LOGIN'
const CLEAN_MESSAGE_USER_CREATE = 'CLEAN_MESSAGE_USER_CREATE'

//Reducer
export default function usersReducer(state = InicialState, action) {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        message: 'Usuario creado.'}
    case SET_USER:
      return {
        ...state,
        user: action.payload
      } 
    case ERROR_LOGIN:
      return {
          ...state,
          error: 'Usuario o contraseña incorrectos.'
      }  
    case CLEAN_MESSAGE_USER_CREATE:
        state.message = '';
        return {
          ...state
        }   
    default:                                      
      return state;
  }
}

//Action


export const postUser = (datos) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:4000/users', datos)
    dispatch({
      type: POST_USER,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = (user) => (dispatch, getState) => {
  try {

    axios.post('http://localhost:4000/auth/login', user)
      .then(user => {
        localStorage.setItem("token", user.data.token);
        dispatch({
          type: SET_USER,
          payload: user.data
        })
      })
      .catch(() => {
        dispatch({
          type: ERROR_LOGIN,
        })
      })

  }
  catch (error) {
    console.log(error)
  }
}

export const cleanMessage = () => (dispatch) => {
  dispatch({ type: CLEAN_MESSAGE_USER_CREATE })
}