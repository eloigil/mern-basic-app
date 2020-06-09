import axios from 'axios'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL  
} from '../actions/types'

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING })

  // Get token from localStorage
  const token = getState().auth.token

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token
  }

  axios.get('/api/auth/user')
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    })).catch(err => {
      dispatch({
        type: AUTH_ERROR
      })
    })
}