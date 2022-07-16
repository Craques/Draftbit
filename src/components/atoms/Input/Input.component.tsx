import { useState } from "react";
import { StyledInput, StyledInputContainer } from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  placeholder = "auto",
  value = "",
  onChange,
  onBlur,
  name,
  testId = "text",
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
        data-testid={`${testId}-input`}
      />
    </StyledInputContainer>
  );
};
