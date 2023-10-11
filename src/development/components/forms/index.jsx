import { FormLayout } from "../../layout/form-layout/form-layout";
import { FormRegistration } from "./form-registration/form-registration";
import { FormSignIn } from "./form-signIn/form-signIn";
import { useSelector } from "react-redux";

export function FormIdentification() {
  const form = useSelector(state => state.form);

  return (
    <FormLayout>
      {form.signUp ? <FormRegistration /> : <FormSignIn />}
    </FormLayout>
  );
}