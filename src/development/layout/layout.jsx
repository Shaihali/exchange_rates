import { Header } from '../view/header/header';
import layout from './layout.module.css';

function Layout({children}) {
  return (
    <>
      <header className={layout.header}>
        <div className={layout.wrapper}>
          <Header />
        </div>
      </header>
      <main>
        <div className={layout.wrapper}>{children}</div>
      </main>
      <footer>
        <div className={layout.wrapper}></div>
      </footer>
    </>
  )
};

export default Layout;