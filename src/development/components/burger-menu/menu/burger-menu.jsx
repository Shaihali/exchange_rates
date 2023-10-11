import burgerMenu from './burger-menu.module.css';

export function BurgerMenu({userName, isOpen, handleClick}) {
  
  return (
    <div className={`${burgerMenu.menu} ${isOpen ? burgerMenu.menu_open : ''}`}>
      <nav>
        <ul>
          <li className={burgerMenu.item}>{userName}</li>
        </ul>
      </nav>
      <button className={burgerMenu.button} onClick={handleClick}>Выход</button>
    </div>
  );
}