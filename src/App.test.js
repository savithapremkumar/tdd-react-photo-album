import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./../utils";

//import { render } from '@testing-library/react';
import App from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const setUp = (props = {}) => {
  return shallow(<App />);
};

describe("App Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without error", () => {
    const wrapper = findByTestAttr(component, "appComponent");
    expect(wrapper.length).toBe(1);
  });
  it("should render the heading div", () => {
    const wrapper = findByTestAttr(component, "appComponent");
    expect(wrapper.find("div").hasClass("header")).toBe(true);
    expect(wrapper.find(".header").text()).toBe(
      "JSON Placeholder Albums Loader"
    );
    //console.log(enzymeWrapper.debug());
  });
});
