import { render, screen, fireEvent, act } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes } from "./components/Reservations";

describe("BookingForm", () => {
  /////////////////////////////////////////////////////////////////

  test("Renders the BookingForm heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Reservation Form/i);
    expect(headingElement).toBeInTheDocument();
  });

  ////////////////////////////////////////////////////////////////
  /*
  test("Submits the form when the button is clicked", () => {
    // Arrange
    const mockUpdateTimes = jest.fn(); // mock the updateTimes function
    render(<BookingForm selectedTime="18:00" updateTimes={mockUpdateTimes} />);

    // Act
    const submitButton = screen.getByText(/Make Your reservation/i);
    fireEvent.click(submitButton);

    // Assert
    act(() => {
      jest.useFakeTimers();
      jest.runAllTimers(); // Advance timers to simulate the asynchronous alert
    });

    expect(window.alert).toHaveBeenCalledWith("Form submitted!");
  });
  */
});

describe("Reservations", () => {
  ////////////////////////////////////////////////////////

  describe("initializeTimes", () => {
    test("returns the expected initial state", () => {
      const initialState = initializeTimes();
      expect(initialState).toEqual({
        time: "Time",
      });
    });
  });

  ////////////////////////////////////////////////////////

  describe("updateTimes", () => {
    test("Updates time when a new time is selected", () => {
      // Arrange
      const mockUpTimes = jest.fn();
      const selectedTime = "18:00";

      // Act
      render(
        <BookingForm selectedTime={selectedTime} updateTimes={mockUpTimes} />
      );

      // Get the select element
      const timeSelect = screen.getByPlaceholderText(/Time/i);

      // Act
      fireEvent.change(timeSelect, { target: { value: "19:00" } });

      // Assert
      expect(mockUpTimes).toHaveBeenCalledWith("19:00");
    });
  });
});
