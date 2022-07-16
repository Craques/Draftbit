import { render, screen } from "@testing-library/react";
import { Input, InputProps } from ".";
import { renderWithProviders } from "../../../helpers/testHelper";

const getComponent = (props?: InputProps) => {
  return <Input {...props} />;
};

describe("Input", () => {
  it("should render without error", () => {
    renderWithProviders(getComponent());
    expect(screen.getByTestId("text-input")).toBeTruthy();
  });
});
