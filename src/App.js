import "./App.css";
import EventForm from "./Components/EventForm";
import EventList from "./Components/EventList";
import { createContext } from "react";
import ContextData from "./Components/ContextData";
import { NavLink, Route, Routes } from "react-router-dom";
import EventDetails from "./Components/EventDetails";

export const EventDataContext = createContext();
function App() {
  const { eventList, setEventList } = ContextData();
  const ContextValues = { eventList, setEventList };

  return (
    <EventDataContext.Provider value={ContextValues}>
      <div className="App">
        <div className="nav-bar">

        <NavLink to="/EventForm">event form</NavLink>
        <NavLink to="/EventList">event list</NavLink>
        </div>
        <h1>Event App</h1>

        <Routes>
          <Route path="/" element={<EventForm />} />
          <Route path="/EventForm" element={<EventForm />} />
          <Route path="/EventList" element={<EventList />} />
          <Route path="/EventDetails/:eventParam" element={<EventDetails />} />
          <Route path="/EventForm/:editEvent" element={<EventForm />} />
        </Routes>
      </div>
    </EventDataContext.Provider>
  );
}

export default App;
