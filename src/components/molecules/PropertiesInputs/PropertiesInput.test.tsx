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
});
