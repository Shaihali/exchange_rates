import form from '../form.module.css';
import { useEventHendlersForm } from '../event-handlers/event-hendlers-form';

export function FormRegistration() {
  const {
    userName,
    userPassword,
    userEmail,
    handleNameField,
    handlePasswordField,
    handleRegister,
    handleEmailField
  } = useEventHendlersForm();

  return (
        <>
          <div className={form.form_title_box}>
            <h2 className={form.form_title}>Create your account</h2>
          </div>
          <div className={form.form_item}>
            <label htmlFor="name" className={form.label}>Name</label>
            <input type="text" id="name" placeholder="Введите имя" className={form.input} onChange={(event) => handleNameField(event)}></input>
          </div>
          <div className={form.form_item}>
            <label htmlFor="email" className={form.label}>Email</label>
            <input type="email" id="email" placeholder="Введите почту" className={form.input} onChange={(event) => handleEmailField(event)}></input>
          </div>
          <div className={form.form_item}>
            <label htmlFor="password" className={form.label}>Password</label>
            <input type="password" id="password" placeholder="Введите пароль" className={form.input} onChange={(event) => handlePasswordField(event)}></input>
          </div>
          <div className={form.form_item}>
            <input type="checkbox" id="exampleCheck1" className={form.input_checkbox}></input>
            <label htmlFor="exampleCheck1" className={form.label_checkbox}>Remember me</label>
          </div>
          <button className={form.button} onClick={(event) => handleRegister(event, userName, userEmail, userPassword)}>Create Account</button>
        </>
  );
};