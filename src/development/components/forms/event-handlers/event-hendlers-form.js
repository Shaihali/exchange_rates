import { useDispatch, useSelector } from "react-redux";
import { registerUserAction, loginUserAction } from '../../../actions/user-actions/user-actions';
import { useRef, useState } from "react";
import formLoyout from '../../../layout/form-layout/form-layout.module.css';
import { signInAction, signUpAction } from "../../../actions/form-actions/form-actions";
import { useNavigate } from "react-router-dom";
import { getSymbols } from "../../../requests/axios/get-symbols/get-symbols";
import { symbolsAction } from "../../../actions/symbols-action/symbols-action";

export function useEventHendlersForm() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [wrongEntry, setWrongEntry] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUp = useRef(null);
  const signIn = useRef(null);
  const users = useSelector((state) => state.user.users)
  
  const handleRegister = (event, userName, userEmail, userPassword) => {
    const idUser = users.length + 1;
    event.preventDefault();
    dispatch(registerUserAction(userName, userEmail, userPassword));
    navigate(`/users/${idUser}`);
  };
  const handleNameField = (event) => {
  setUserName(event.target.value)
  };
  const handleEmailField = (event) => {
    setUserEmail(event.target.value)
  }
  const handlePasswordField = (event) => {
  setUserPassword(event.target.value)
  }
  const handleLogin = async (event, username, password) => {
    event.preventDefault();
    dispatch(loginUserAction(username, password));
    const idUser = users.findIndex((user) => user.username === username && user.password === password);
    const userExists = users.some((user) => user.username === username && user.password === password);
    if (userExists) {
      navigate(`/users/${idUser + 1}`);
      const symbols = await getSymbols();
      dispatch(symbolsAction(symbols.symbols))
    } else {
      setWrongEntry('wrong login or password')
    }
  };
  const handleClickSigup = (event) => {
    event.preventDefault();
    const element = signUp.current;
    
    if (element.classList.length === 1) {
      element.classList.add(formLoyout.sign_activ);
      signIn.current.classList.remove(formLoyout.sign_activ);
      dispatch(signUpAction('signUp'));
      dispatch(signInAction(null));
      navigate('/registration')
    }
  };
  const handleClickSigin = (event) => {
    event.preventDefault();
    const element = signIn.current;
    
    if (element.classList.length === 1) {
      element.classList.add(formLoyout.sign_activ);
      signUp.current.classList.remove(formLoyout.sign_activ);
      dispatch(signInAction('signIn'));
      dispatch(signUpAction(null));
      navigate('/login')
    }
  }
  
  return {
    userName,
    userPassword,
    userEmail,
    signUp,
    signIn,
    wrongEntry,
    handleRegister,
    handleNameField,
    handlePasswordField,
    handleLogin,
    handleEmailField,
    handleClickSigup,
    handleClickSigin
  }
}