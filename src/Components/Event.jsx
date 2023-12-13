import Attendee from "./Attendee";
import { useState } from "react";
export default function Event({ event, attendees, updateEventAttendance}) {

  const [showAttendees, setShowAttendees] = useState(false);

  const toggleEventAttendees = () => {
    setShowAttendees(!showAttendees);
  };

  return(
    <li key={event.id}>
    <img src={event.eventImage} alt={event.name} />
    <h5>
      {event.name} {event.eventType}
    </h5>
    <br />
    <span>Organized by: {event.organizer} </span>
    <br />
    <>
      <button onClick={() =>toggleEventAttendees()}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee
              key={attendee.id}
              attendee={attendee}
              updateEventAttendance={updateEventAttendance}
              event={event}
            />
          ))}
        </div>
      ) : null}
    </>
  </li>
  );
}
