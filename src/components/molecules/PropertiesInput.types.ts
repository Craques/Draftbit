import React from "react";

export interface PropertiesInputProps {
  children?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  property: string;
  propertyValues: Record<string, string>;
}
