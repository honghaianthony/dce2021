import { LOGIN, LOGOUT, RELOAD } from "./constants";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

const initState = {
  isAuthenticated: false,
  userId: -1,
  username: null,
  role: -1,
  fullname: "",
};

function reducer(state, action) {
  switch (action.type) {
    case RELOAD:
      // const token = localStorage.getItem("token");
      const token = Cookies.get('token');
      if (token) {
        const infoReload = jwt_decode(token);
        return {
          isAuthenticated: true,
          userId: infoReload.userId,
          username: infoReload.username,
          role: infoReload.role,
          fullname: infoReload.fullname,
        };
      } else {
        return initState;
      }
    case LOGIN:
      // localStorage.setItem("token", action.payload);
      Cookies.set('token', action.payload, { expires: 1 });
      const info = jwt_decode(action.payload);
      return {
        isAuthenticated: true,
        userId: info.userId,
        username: info.username,
        role: info.role,
        fullname: info.fullname,
      };
    case LOGOUT:
      // localStorage.removeItem("token");
      Cookies.remove('token');
      return initState;
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
