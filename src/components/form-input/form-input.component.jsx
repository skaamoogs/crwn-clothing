import {
  FormInputField,
  FormInputGroup,
  FormInputLabel,
  FormInputShrink,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  const CustomLabel = otherProps.value.length
    ? FormInputShrink
    : FormInputLabel;

  return (
    <FormInputGroup>
      <FormInputField {...otherProps} />
      {label && <CustomLabel>{label}</CustomLabel>}
    </FormInputGroup>
  );
};

export default FormInput;
