import "../App.css";
import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("Time");
  const [numOfGuests, setNumOfGuests] = useState("1");
  const [occasion, setOccasion] = useState("Occasion");

  const getIsFormValid = () => {
    return (
      name && selectedDate && selectedTime !== "Time" && occasion !== "Occasion"
    );
  };

  const clearForm = () => {
    setName("");
    setSelectedDate("");
    setSelectedTime("Time");
    setNumOfGuests("1");
    setOccasion("occasion");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    clearForm();
  };

  return (
    <>
      <form className="center form-components" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          value={selectedDate}
          id="res-date"
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <br />
        <label htmlFor="res-time">Choose time</label>
        <select
          value={selectedTime}
          id="res-time"
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="time">Time</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        <br />
        <label htmlFor="guests">Number of guests</label>
        <input
          value={numOfGuests}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setNumOfGuests(e.target.value)}
        />
        <br />
        <label htmlFor="occasion">Occasion</label>
        <select
          value={occasion}
          id="occasion"
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="occasion">Occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <br />
        <button disabled={!getIsFormValid()} type="submit">
          Make Your reservation
        </button>
        <h2>State Confirmation:</h2>
        <p>Set Name: {name}</p>
        <p>Selected Date: {selectedDate}</p>
        <p>Selected Time: {selectedTime}</p>
        <p>Number of Guests: {numOfGuests}</p>
        <p>Selected Occasion: {occasion}</p>
      </form>
    </>
  );
}

export default BookingForm;
