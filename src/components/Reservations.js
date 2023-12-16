import "../App.css";
import BookingForm from "./BookingForm";
import { useReducer } from "react";

const initialState = {
  time: "Time",
};

export const initializeTimes = () => {
  return initialState;
};

const updatedTimesReducer = (state, action) => {
  if (action.type === "update_time") return { ...state, time: action.payload };
  return state;
};

function Reservations() {
  const [state, dispatch] = useReducer(updatedTimesReducer, initializeTimes);

  const updateTimes = (time) => {
    dispatch({ type: "update_time", payload: time });
  };

  return (
    <>
      <BookingForm selectedTime={state.time} updateTimes={updateTimes} />
    </>
  );
}

export default Reservations;
