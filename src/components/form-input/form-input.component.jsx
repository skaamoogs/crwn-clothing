import {
  FormInputField,
  FormInputGroup,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputGroup>
      <FormInputField {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </FormInputGroup>
  );
};

export default FormInput;
