import { screen } from "@testing-library/react";
import React from "react";
import { PropertiesInput, PropertiesInputProps } from ".";
import { renderWithProviders } from "../../../helpers/testHelper";

const onChangeMock = jest.fn();
const onBlurMock = jest.fn();

const getComponent = (props: PropertiesInputProps) => {
  return <PropertiesInput {...props} />;
};

describe("PropertiesInput", () => {
  it("should render without error", () => {
    renderWithProviders(
      getComponent({
        onBlur: onBlurMock,
        onChange: onChangeMock,
        property: "padding",
        propertyValues: {},
      }),
    );
  });

  it.each`
    property     | testId
    ${"margin"}  | ${"margin-left-input"}
    ${"margin"}  | ${"margin-right-input"}
    ${"margin"}  | ${"margin-top-input"}
    ${"margin"}  | ${"margin-bottom-input"}
    ${"padding"} | ${"padding-left-input"}
    ${"padding"} | ${"padding-right-input"}
    ${"padding"} | ${"padding-top-input"}
    ${"padding"} | ${"padding-bottom-input"}
    ${"border"}  | ${"border-left-input"}
    ${"border"}  | ${"border-right-input"}
    ${"border"}  | ${"border-top-input"}
    ${"border"}  | ${"border-bottom-input"}
  `(
    "should render the correct properties inputs for $property",
    ({ property, testId }) => {
      renderWithProviders(
        getComponent({
          onBlur: onBlurMock,
          onChange: onChangeMock,
          property,
          propertyValues: {},
        }),
      );

      expect(screen.getByTestId(testId)).toBeTruthy();
    },
  );

  it.each`
    testId                   | value
    ${"margin-top-input"}    | ${"10px"}
    ${"margin-bottom-input"} | ${"15px"}
    ${"margin-left-input"}   | ${"20px"}
    ${"margin-right-input"}  | ${"30px"}
  `(
    "should render property values correctly if they are provided",
    ({ testId, value }) => {
      renderWithProviders(
        getComponent({
          onBlur: onBlurMock,
          onChange: onChangeMock,
          property: "margin",
          propertyValues: {
            "margin-left": "20px",
            "margin-right": "30px",
            "margin-top": "10px",
            "margin-bottom": "15px",
          },
        }),
      );

      expect(screen.getByTestId(testId)).toHaveValue(value);
    },
  );

  it("should render child if available", () => {
    renderWithProviders(
      getComponent({
        onBlur: onBlurMock,
        onChange: onChangeMock,
        property: "margin",
        propertyValues: {
          "margin-left": "20px",
          "margin-right": "30px",
          "margin-top": "10px",
          "margin-bottom": "15px",
        },
        children: <div data-testid="child-element">Hello world</div>,
      }),
    );

    expect(screen.getByTestId("child-element")).toBeTruthy();
    expect(screen.getByText(/Hello World/i)).toBeTruthy();
  });
});
