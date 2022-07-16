import React from "react";

export interface InputProps {
  placeholder?: string;
  focused?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (fieldName: string, fieldValue: string) => void;
  onFocus?: () => void;
  value?: string;
  name?: string;
  dimensions?: string;
  width?: number;
  testId?: string;
}
