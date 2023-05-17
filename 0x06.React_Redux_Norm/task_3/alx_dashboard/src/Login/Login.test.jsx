import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";

describe("<Login />", () => {
  it("renders the login form with the correct content", () => {
    render(<Login />);

    //const loginForm = screen.getByRole("form");
    const emailInput = screen.getByLabelText("Email Address:");
    const passwordInput = screen.getByLabelText("Password:");
    const signInButton = screen.getByRole("button", { name: "Sign In" });

    //expect(loginForm).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(signInButton).toBeDisabled(); // Button should be disabled initially
  });

  it("enables the Sign In button when both email and password are filled", async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Email Address:");
    const passwordInput = screen.getByLabelText("Password:");
    const signInButton = screen.getByRole("button", { name: "Sign In" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    await waitFor(() => {
      expect(signInButton).toBeEnabled();
    });
  });

  it("calls the logIn function when Sign In button is clicked", async () => {
    const logInMock = jest.fn();
    render(<Login logIn={logInMock} />);

    const emailInput = screen.getByLabelText("Email Address:");
    const passwordInput = screen.getByLabelText("Password:");
    const signInButton = screen.getByRole("button", { name: "Sign In" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(logInMock).toHaveBeenCalledWith("test@example.com", "password123");
    });
  });
});
