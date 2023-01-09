import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventDataContext } from "../App";

export default function EventDetails() {
  const { eventList } = useContext(EventDataContext);
  const param = useParams();
  const eventDet = eventList.filter(
    (item) => item.eventName === param.eventParam
  );

  return (
    <div>
      <p>Name: {eventDet[0].eventName}</p>
      <p>Date: {eventDet[0].startDate}</p>
      <p>Time :{eventDet[0].time}</p>
      <p>Location: {eventDet[0].location}</p>
      <p>Description: {eventDet[0].description}</p>
    </div>
  );
}
