export interface PrismProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (fieldName: string, fieldValue: string) => void;
  propertyValues: Record<string, string>;
}
