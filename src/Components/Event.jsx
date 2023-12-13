import { useState } from "react";
import Attendees from "./Attendees";
export default function Event({events,updateEventAttendance}) {
 
  return (
    <>
    {events.map((event) => {
      const { people: attendees } = event;

      return (
          <li key={event.id}>
            <img src={event.eventImage} alt={event.name} />
            <h5>
              {event.name} {event.eventType}
            </h5>
            <br />
            <span>Organized by: {event.organizer} </span>
            <br />
            <Attendees  updateEventAttendance={updateEventAttendance} key={`attendees-${event.id}`} event={event}attendees={attendees}/>
          </li>
      );
    })}
    </>
  )
}
