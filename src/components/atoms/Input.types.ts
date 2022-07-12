import React from "react";

export interface InputPropTypes {
  defaultValue?: string;
  focused?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (fieldName: string, fieldValue: string) => void;
  onFocus?: () => void;
  value?: string;
  name?: string;
  dimensions?: string;
  width?: number;
  hasUpdatedValue?: boolean;
}
