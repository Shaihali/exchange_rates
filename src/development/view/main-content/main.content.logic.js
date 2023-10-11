import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../actions/user-actions/user-actions";
import { useNavigate } from "react-router-dom";
import { signInAction, signUpAction } from "../../actions/form-actions/form-actions";

export function useEventHendlersMainContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUserAction());
    dispatch(signUpAction('signUp'));
    dispatch(signInAction(null));
    localStorage.removeItem('resultConvert');
    navigate('/registration');
  };
  return {
    handleLogout,
  }
}