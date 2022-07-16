import { act, fireEvent, render, screen } from "@testing-library/react";
import { Input, InputProps } from ".";
import { renderWithProviders } from "../../../helpers/testHelper";
import { theme } from "../../../theme/theme";

const onChangeMock = jest.fn();
const onBlurMock = jest.fn();
const onFocusMock = jest.fn();

const getComponent = (props?: InputProps) => {
  return (
    <Input
      {...props}
      onChange={onChangeMock}
      onBlur={onBlurMock}
      onFocus={onFocusMock}
    />
  );
};

describe("Input", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render without error", () => {
    renderWithProviders(getComponent());
    expect(screen.getByTestId("text-input")).toBeTruthy();
  });

  it("should render the correct placeholder text", () => {
    renderWithProviders(getComponent());
    const input = screen.getByTestId("text-input");
    expect(input).toHaveAttribute("placeholder", "auto");
  });

  it("should fire on change event", () => {
    renderWithProviders(getComponent());
    const input = screen.getByTestId("text-input");
    fireEvent.change(input, { target: { value: "h" } });
    expect(onChangeMock).toHaveBeenCalled();
  });

  it("should render the correct value", () => {
    renderWithProviders(getComponent({ value: "initialValue" }));
    const input = screen.getByTestId("text-input");
    expect(input).toHaveValue("initialValue");
  });

  it.todo("should render the correct background color on focus");

  it.todo("should render outline on focus");

  it("should render underline color on text if it has changed and not focused", () => {
    renderWithProviders(getComponent({ value: "initialValue" }));
    const input = screen.getByTestId("text-input");

    expect(input).toHaveStyle(
      `text-decoration-color: ${theme.colors.highlight}`,
    );
  });
});
