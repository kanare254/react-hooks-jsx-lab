import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { image } from "../data/data"; // Ensure this path is correct and the image variable is properly exported
import About from "../components/About";

test("renders a <div> with the ID of 'about'", () => {
  const { container } = render(<About />);

  const about = container.querySelector("#about");
  expect(about).toBeInTheDocument();
});

test("the <div> has three child elements", () => {
  const { container } = render(<About />);

  const about = container.querySelector("#about");
  expect(about.children).toHaveLength(3);
});

test("renders a <h2> with the text 'About Me'", () => {
  render(<About />);

  // find an element with the text content "About Me"
  const h2 = screen.getByText("About Me");

  // check that it's a <h2> element
  expect(h2).toBeInTheDocument();
});

test("renders a <p> element", () => {
  const { container } = render(<About />);

  const p = container.querySelector("p");
  expect(p).toBeInTheDocument();
});

test("renders a <img> element with the correct attributes", () => {
  render(<About />);

  // Find an element with the "alt" attribute set to "I made this"
  const img = screen.getByAltText("I made this");

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", image);
});
