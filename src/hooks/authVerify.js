import { useDispatch } from "react-redux";
import { loginCheck } from "../util";
import { setIsLogin } from "../Redux_thunk/userSlice";

export const useVerify = () => {
  const dispatch = useDispatch();

  loginCheck() ? dispatch(setIsLogin(true)) : dispatch(setIsLogin(false));
};
