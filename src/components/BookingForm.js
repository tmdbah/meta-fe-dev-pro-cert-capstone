import "../App.css";
import { useState } from "react";

function BookingForm({ selectedTime, updateTimes }) {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("1");
  const [occasion, setOccasion] = useState("");

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    updateTimes(newTime);
  };

  const getIsFormValid = () => {
    return name && selectedDate && selectedTime !== "" && occasion !== "";
  };

  const clearForm = () => {
    setName("");
    setSelectedDate("");
    updateTimes("");
    setNumOfGuests("1");
    setOccasion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    clearForm();
  };

  return (
    <>
      <h1 id="booking-form-label" className="center">
        Reservation Form:
      </h1>
      <form
        className="center form-components"
        onSubmit={handleSubmit}
        aria-labelledby="booking-form-label"
      >
        <label htmlFor="name" aria-label="Name:">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required="true"
        />
        <br />
        <label htmlFor="res-date" aria-label="Choose date">
          Choose date
        </label>
        <input
          type="date"
          value={selectedDate}
          id="res-date"
          onChange={(e) => setSelectedDate(e.target.value)}
          aria-required="true"
        />
        <br />
        <label htmlFor="res-time" aria-label="Choose time for reservation">
          Choose time
        </label>
        <select
          value={selectedTime}
          id="res-time"
          onChange={handleTimeChange}
          aria-required="true"
          aria-labelledby="choose-time-label"
          placeholder="Time"
        >
          <option value="">Time</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        <br />
        <label htmlFor="guests" aria-label="Number of guests">
          Number of guests
        </label>
        <input
          value={numOfGuests}
          type="number"
          min="1"
          max="10"
          id="guests"
          placeholder="1"
          onChange={(e) => setNumOfGuests(e.target.value)}
          aria-required="true"
        />
        <br />
        <label htmlFor="occasion" aria-label="Occasion">
          Occasion
        </label>
        <select
          value={occasion}
          id="occasion"
          onChange={(e) => setOccasion(e.target.value)}
          aria-required="true"
        >
          <option value="">Occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <br />
        <button
          disabled={!getIsFormValid()}
          type="submit"
          aria-live="polite"
          aria-label="Make Your reservation"
          role="submitButton"
          name="Make Your reservation"
        >
          Make Your reservation
        </button>
      </form>
      <div className="center">
        <h2>State Confirmation:</h2>
        <p>Set Name: {name}</p>
        <p>Selected Date: {selectedDate}</p>
        <p>Selected Time: {selectedTime}</p>
        <p>Number of Guests: {numOfGuests}</p>
        <p>Selected Occasion: {occasion}</p>
      </div>
    </>
  );
}

export default BookingForm;
