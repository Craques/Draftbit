import React from "react";

export interface InputPropTypes {
  defaultValue?: string;
  focused?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  value?: string;
  name?: string;
  dimensions?: string;
  width?: number;
}
