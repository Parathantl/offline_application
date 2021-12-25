import { SET_DATA, GET_DATA } from './index'

export function setData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}
