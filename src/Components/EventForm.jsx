import { useContext } from "react";
import { useForm } from "react-hook-form";
import { EventDataContext } from "../App";
import { useParams } from "react-router-dom";
import "./layouts.css";

export default function EventForm() {
  const { eventList, setEventList } = useContext(EventDataContext);
  let eventIndex = 0;
  const param = useParams();
  const EditEvent = eventList.filter((edit, i) => {
    eventIndex = i;
    return edit.eventName == param.editEvent;
  });
  console.log(EditEvent);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      eventName: EditEvent[0] ? EditEvent[0].eventName : "",
      startDate: EditEvent[0] ? EditEvent[0].startDate : "",
      time: EditEvent[0] ? EditEvent[0].time : "",
      location: EditEvent[0] ? EditEvent[0].location : "",
      description: EditEvent[0] ? EditEvent[0].description : "",
    },
  });

  const onSubmit = (data) => {
    if (EditEvent[0]) {
      eventList[eventIndex] = data;
      setEventList(eventList);
      alert("Event edited!");
    } else {
      setEventList([...eventList, data]);
      alert("Event added to event list");
    }
  };
  // const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        type="string"
        placeholder="Event Name"
        {...register("eventName", { required: true })}
      />
      <input type="date" placeholder="Start Date" {...register("startDate")} />
      <input type="time" placeholder="Time" {...register("time")} />
      <input type="text" placeholder="Location" {...register("location")} />
      <input
        type="string"
        placeholder="Description"
        {...register("description")}
      />
      <button class="button-1" type="submit" value="Add event">
        Submit
      </button>
    </form>
  );
}
