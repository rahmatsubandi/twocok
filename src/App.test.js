import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./components/Carousel";

test("renders #justathome any", () => {
  const { getByText } = render(<Carousel />);
  const linkElement = getByText(/#justathome/i);
  expect(linkElement).toBeInTheDocument();
});
