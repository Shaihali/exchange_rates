import { useSelector } from "react-redux";
import { useEventHendlersMainContent } from "../main-content/main.content.logic";
import { Treadmill } from "../main-content/treadmill/treadmill";
import header from './header.module.css';
import { Burger } from "../../components/burger-menu/burger/burger";
import { BurgerMenu } from "../../components/burger-menu/menu/burger-menu";
import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";

export function Header() {
  const { handleLogout } = useEventHendlersMainContent();
  const state = useSelector(state => state.user);
  const currentUser = state.loggedInUser;
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [titleHeader, setTitleHeader] = useState('Я на главной странице');
  const idUser = currentUser && state.users.findIndex((user => user.username === currentUser.username && user.password === currentUser.password));

  const handleClickBurger = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }
  const handleExitBurgerMenu = () => {
    handleLogout();
    setIsBurgerMenuOpen(false)
  }
  const handleClickToUserProfile = () => {
    setTitleHeader('Я у тебя на странице');
  }

 
    const handleBackButton = () => {
      setTitleHeader('Я на главной странице');
    };

    useEffect(() => {
      window.addEventListener('popstate', handleBackButton);
  
      return () => {
        window.removeEventListener('popstate', handleBackButton);
      };
    }, []);
  

  return (
    <>
      {currentUser ? (
        <>
          <div className={header.header_box}>
            <h1> {titleHeader} </h1>
            <Burger handleClick={handleClickBurger}/>
            <BurgerMenu 
              userName={currentUser.username}
              isOpen={isBurgerMenuOpen}
              handleClick={handleExitBurgerMenu}
            />
            <div className={header.user}>
              <div className={header.user_icon}></div>
              <div 
                className={header.user_name}
                onClick={handleClickToUserProfile}
              >
                <Link to={`/users/${idUser + 1}/profile`}>{currentUser.username}</Link>
              </div>
              <button className={header.user_exit} onClick={handleLogout}></button>
            </div>
          </div>
          <Treadmill />
        </>
      ): (
          <>
            <div className={header.header_box}>
              <h1>Я на странице регистрации </h1>
            </div>
          </>
        )}
    </>
  );
}