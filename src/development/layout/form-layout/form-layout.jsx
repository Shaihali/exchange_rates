import { useEventHendlersForm } from '../../components/forms/event-handlers/event-hendlers-form';
import formLayout from './form-layout.module.css'

export function FormLayout({children}) {
  const {
    signUp,
    signIn,
    handleClickSigup,
    handleClickSigin,
  } = useEventHendlersForm();
  return (
    <form className={formLayout.form_box}>
      <div className={formLayout.button_box}>
        <button className={`${formLayout.sign_up} ${formLayout.sign_activ}`} ref={signUp} onClick={(event) => handleClickSigup(event)}>SIGN UP</button>
        <button className={formLayout.sign_in} ref={signIn} onClick={(event) => handleClickSigin(event)}>SIGN IN</button>
      </div>
      {children}
    </form>
  );

}