import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { EventDataContext } from "../App";
import "./layouts.css";

export default function EventList() {
  const { eventList, setEventList } = useContext(EventDataContext);
  // console.log(eventList);

  function DeleteEvent(eventIndex) {
    setEventList(eventList.filter((item, index) => index !== eventIndex));
  }

  return (
    <div>
      {eventList.map((newEvent, index) => (
        <li key={index}>
          <h2>{newEvent.eventName}</h2>
          <p>Date: {newEvent.startDate}</p>
          <p>Time: {newEvent.time}</p>
          <p>Location: {newEvent.location}</p>
          <button class="button-1" onClick={() => DeleteEvent(index)}>Delete</button>

          <NavLink to={`/EventDetails/${newEvent.eventName}`}>
            <button class="button-1">Details</button>
          </NavLink>
          <NavLink to={`/EventForm/${newEvent.eventName}`}>
            <button class="button-1">Edit</button>
          </NavLink>
        </li>
      ))}
    </div>
  );
}
