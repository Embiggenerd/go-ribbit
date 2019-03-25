import { NOMATCH, ERROR } from '../../constants'

export const noMatchAC = (error) =>({
  type: ERROR,
  error
})