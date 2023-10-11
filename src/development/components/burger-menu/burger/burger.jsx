import burger from './burger.module.css';

export function Burger({handleClick}) {
  return (
    <div className={burger.burger} onClick={handleClick}>
      <div className={burger.burger_item}></div>
      <div className={burger.burger_item}></div>
      <div className={burger.burger_item}></div>
    </div>
  );
}