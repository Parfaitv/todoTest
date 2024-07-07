import { fireEvent, render, screen } from "@testing-library/react";
import { FooterTodos } from "./FooterTodos";

describe("Testing FooterTodos", () => {
  test("render FooterTodos", () => {
    render(
      <FooterTodos
        allTodos={[]}
        lengthCurrentTodos={0}
        setAllTodos={() => {}}
        setCurrentTodos={() => {}}
      />,
    );
  });

  test("clicked button All", () => {
    const mockSetAllTodos = jest.fn();
    const mockSetCurrentTodos = jest.fn();
    render(
      <FooterTodos
        allTodos={[]}
        lengthCurrentTodos={0}
        setAllTodos={mockSetAllTodos}
        setCurrentTodos={mockSetCurrentTodos}
      />,
    );
    const button = screen.getByText("All");
    fireEvent.click(button);
    expect(mockSetCurrentTodos).toBeCalled();
    expect(mockSetAllTodos).not.toBeCalled();
  });

  test("clicked button Active", () => {
    const mockSetAllTodos = jest.fn();
    const mockSetCurrentTodos = jest.fn();
    render(
      <FooterTodos
        allTodos={[]}
        lengthCurrentTodos={0}
        setAllTodos={mockSetAllTodos}
        setCurrentTodos={mockSetCurrentTodos}
      />,
    );
    const button = screen.getByText("Active");
    fireEvent.click(button);
    expect(mockSetCurrentTodos).toBeCalled();
    expect(mockSetAllTodos).not.toBeCalled();
  });

  test("clicked button Completed", () => {
    const mockSetAllTodos = jest.fn();
    const mockSetCurrentTodos = jest.fn();
    render(
      <FooterTodos
        allTodos={[]}
        lengthCurrentTodos={0}
        setAllTodos={mockSetAllTodos}
        setCurrentTodos={mockSetCurrentTodos}
      />,
    );
    const button = screen.getByText("Completed");
    fireEvent.click(button);
    expect(mockSetCurrentTodos).toBeCalled();
    expect(mockSetAllTodos).not.toBeCalled();
  });

  test("clicked button 'Clear completed'", () => {
    const mockSetAllTodos = jest.fn();
    const mockSetCurrentTodos = jest.fn();
    render(
      <FooterTodos
        allTodos={[]}
        lengthCurrentTodos={0}
        setAllTodos={mockSetAllTodos}
        setCurrentTodos={mockSetCurrentTodos}
      />,
    );
    const button = screen.getByText("Clear completed");
    fireEvent.click(button);
    expect(mockSetCurrentTodos).toBeCalled();
    expect(mockSetAllTodos).toBeCalled();
  });
});
