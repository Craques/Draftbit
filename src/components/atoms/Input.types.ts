import React from "react";

export interface InputPropTypes {
  defaultValue?: string;
  focused?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  value?: string;
  name?: string;
}
