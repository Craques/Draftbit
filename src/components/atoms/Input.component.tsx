import { useState } from "react";
import {
  DimensionsContainer,
  StyledInput,
  StyledInputContainer,
} from "./Input.styles";
import { InputPropTypes } from "./Input.types";

export const Input = ({
  defaultValue = "auto",
  value,
  onChange,
  name,
  dimensions = "px",
}: InputPropTypes): JSX.Element => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <StyledInputContainer focused={focused}>
      <StyledInput
        value={value ?? defaultValue}
        onChange={onChange}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        focused={focused}
      />
      <DimensionsContainer>{dimensions}</DimensionsContainer>
    </StyledInputContainer>
  );
};
