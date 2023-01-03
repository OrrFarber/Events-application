import { useState } from "react";

function ContextData() {
  const [eventList, setEventList] = useState([
    {
      eventName: "Template",
      startDate: "2023-01-01",
      time: "00:00",
      location: "ah la rampa",
      description: "happy new year",
    },
  ]);

  return { eventList, setEventList };
}
export default ContextData;
