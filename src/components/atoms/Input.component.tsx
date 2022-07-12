import { useState } from "react";
import { StyledInput, StyledInputContainer } from "./Input.styles";
import { InputPropTypes } from "./Input.types";

export const Input = ({
  defaultValue = "auto",
  value = "",
  onChange,
  onBlur,
  name,
}: InputPropTypes): JSX.Element => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);

  const onInputBlur = () => {
    onBlur && onBlur(name!, value);
    setFocused(false);
  };
  const hasUpdatedValue = value !== defaultValue;

  return (
    <StyledInputContainer
      focused={focused}
      hasUpdatedValue={hasUpdatedValue}
      value={value}
    >
      <StyledInput
        value={value}
        onChange={onChange}
        name={name}
        onFocus={onFocus}
        onBlur={onInputBlur}
        focused={focused}
        width={value?.length ? value.length : defaultValue.length}
        placeholder={defaultValue}
        hasUpdatedValue={!!value.length}
      />
    </StyledInputContainer>
  );
};
