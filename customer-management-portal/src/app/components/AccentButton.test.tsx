
import React from "react";
import { render, screen } from "@testing-library/react";
import AccentButton from "./AccentButton";
import '@testing-library/jest-dom';



describe('AccentButton Component', () => {
  it('renders the button with the provided display text', () => {
    render(<AccentButton displayText="Add User" />);

    const buttonElement = screen.getByRole('button', { name: /add user/i });

    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the PlusIcon inside the button', () => {
    render(<AccentButton displayText="Add User" />);

    const iconElement = screen.getByTestId('plus-icon');

    expect(iconElement).toBeInTheDocument();
  });
});
