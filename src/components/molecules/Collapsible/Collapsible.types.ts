import React from "react";

export interface CollapsibleProps {
  label: string;
  children: React.ReactNode;
  onToggle: () => void;
  isOpen?: boolean;
}
