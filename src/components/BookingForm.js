import "../App.css";
import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted!");
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
        <input type="date" id="res-date" />
        <br />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <br />
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <br />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <br />
        <button disabled={!name} type="submit">
          Make Your reservation
        </button>
      </form>
    </>
  );
}

export default BookingForm;
