import { useState } from "react";
import { StyledInput, StyledInputContainer } from "./Input.styles";
import { InputPropTypes } from "./Input.types";

export const Input: React.FC<InputPropTypes> = ({
  placeholder = "auto",
  value = "",
  onChange,
  onBlur,
  name,
}): JSX.Element => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);

  const onInputBlur = () => {
    onBlur && onBlur(name!, value);
    setFocused(false);
  };

  return (
    <StyledInputContainer focused={focused} value={value}>
      <StyledInput
        value={value}
        onChange={onChange}
        name={name}
        onFocus={onFocus}
        onBlur={onInputBlur}
        focused={focused}
        placeholder={placeholder}
      />
    </StyledInputContainer>
  );
};
