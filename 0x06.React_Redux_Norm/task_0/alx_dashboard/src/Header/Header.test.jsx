import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  it("renders the header with the correct content", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    const logoElement = screen.getByAltText("logo");
    const titleElement = screen.getByText("School dashboard");

    expect(header).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  it("displays the user email and logout section when user is logged in", () => {
    render(<Header isLoggedIn={true} user={{ email: "test@example.com" }} />);

    const emailElement = screen.getByText("Welcome test@example.com");
    const logoutElement = screen.getByText("(logout)");

    expect(emailElement).toBeInTheDocument();
    expect(logoutElement).toBeInTheDocument();
  });

  it("does not display the user email and logout section when user is not logged in", () => {
    render(<Header isLoggedIn={false} />);

    const emailElement = screen.queryByText("Welcome");
    const logoutElement = screen.queryByText("(logout)");

    expect(emailElement).not.toBeInTheDocument();
    expect(logoutElement).not.toBeInTheDocument();
  });

  it("calls the logOut function when logout is clicked", () => {
    const logOutMock = jest.fn();
    render(
      <Header
        isLoggedIn={true}
        user={{ email: "test@example.com" }}
        logOut={logOutMock}
      />
    );

    const logoutElement = screen.getByText("(logout)");
    fireEvent.click(logoutElement);

    expect(logOutMock).toHaveBeenCalled();
  });
});
