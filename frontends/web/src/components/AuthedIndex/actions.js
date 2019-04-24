import { AUTH } from "../../constants"
import axios from 'axios'

export const logoutUser = () => {
  return async dispatch => {
    try {
      console.log("logout official")
      const response = await axios.get("api/users/logout")
      return dispatch({
        type: AUTH,
        auth: false
      })
      } catch(e) {
        console.log(e)
      }
  }
  
}