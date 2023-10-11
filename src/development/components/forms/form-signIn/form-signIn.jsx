import { useEventHendlersForm } from '../event-handlers/event-hendlers-form';
import form from '../form.module.css';

export function FormSignIn () {
  const {
    userName,
    userPassword,
    handleNameField,
    handlePasswordField,
    handleLogin,
  } = useEventHendlersForm();
  return (
    <>
      <div className={form.form_title_box}>
        <h2 className={form.form_title}>Sign in to your account</h2>
      </div>
      <div className={form.form_item}>
          <label htmlFor="name" className={form.label}>Name</label>
          <input type="text" id="name" placeholder="Введите имя" className={form.input} onChange={(event) => handleNameField(event)}></input>
      </div>
      <div className={form.form_item}>
          <label htmlFor="password" className={form.label}>Password</label>
          <input type="password" id="password" placeholder="Введите пароль" className={form.input} onChange={(event) => handlePasswordField(event)}></input>
      </div>
      <button className={form.button} onClick={(event) => handleLogin(event, userName, userPassword)}>Sign in</button>
    </>
  );
}