import { LOGIN, LOGOUT, RELOAD } from "./constants";
import jwt_decode from "jwt-decode";

const initState = {
  isAuthenticated: false,
  userId: -1,
  username: null,
  role: -1,
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload);
      const info = jwt_decode(action.payload);
      return {
        isAuthenticated: true,
        userId: info.userId,
        username: info.username,
        role: info.role,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return initState;
    case RELOAD:
      const token = localStorage.getItem("token");
      const infoReload = jwt_decode(token);
      return {
        isAuthenticated: true,
        userId: infoReload.userId,
        username: infoReload.username,
        role: infoReload.role,
      };
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
