import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.styles";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { selectCurrentLanguage } from "../../store/language/language.selector";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const currentLanguage = useSelector(selectCurrentLanguage);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
    } else {
      dispatch(signUpStart({ email, password, displayName }));
      resetFormFields();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>{currentLanguage ? "Нет аккаунта?" : "Don't have an account?"}</h2>
      <span>
        {currentLanguage
          ? "Зарегистрироваться с помощью электронной почты"
          : "Sign up with your email and password"}
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={currentLanguage ? "Имя" : "Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label={currentLanguage ? "Эл. почта" : "Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={currentLanguage ? "Пароль" : "Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label={currentLanguage ? "Подтвердить пароль" : "Confirm Password"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">
          {currentLanguage ? "Зарегистрироваться" : "Sign Up"}
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
