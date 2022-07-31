import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value?.length}>  {/**if the number of the length is 0 it's falsy otherwise true **/}
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
