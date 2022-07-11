import { StyledInput } from "./Input.styles";
import { InputPropTypes } from "./Input.types";

export const Input = ({
  defaultValue = "auto",
  value,
  onChange,
  name,
}: InputPropTypes): JSX.Element => {
  return (
    <StyledInput
      value={value ?? defaultValue}
      onChange={onChange}
      name={name}
    />
  );
};
