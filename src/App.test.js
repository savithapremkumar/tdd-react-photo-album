import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./../utils";
import Header from "./components/Header";

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
  let component, props;
  beforeEach(() => {
    component = setUp();
    props = {
      heading: "JSON Placeholder Albums Loader",
    };
  });

  it("should render without error", () => {
    const wrapper = findByTestAttr(component, "appComponent");
    expect(wrapper.length).toBe(1);
  });
  it("should render the Heading component with given props", () => {
    const wrapper = findByTestAttr(component, "appComponent");
    expect(wrapper.find(Header).length).toBe(1);
    //console.log(wrapper.debug());

    expect(wrapper.find(Header).dive().text()).toBe(
      "JSON Placeholder Albums Loader"
    );
  });
});
