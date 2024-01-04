import Attendees from './Attendees';
import { useState } from "react";

export default function Event({ event, attendees, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false); // This controls whether the attendees of an event are displayed.
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return (
      <li>
        <img src={event.eventImage} alt={event.name} />
          <h5>
            {event.name} {event.eventType}
          </h5>
          <br />
          <span>Organized by: {event.organizer} </span>
          <br />
          <Attendees showAttendees={showAttendees} attendees={attendees} event={event}  updateEventAttendance={updateEventAttendance} toggleEventAttendees={toggleEventAttendees} />
      </li>
  );
}

// attendees is nested inside events so add html for attendees to Attendees.jsx
//might have to import useStates or functions
// <Attendees  showAttendees={showAttendees} attendees={event.people} eventId={event.id} updateEventAttendance={updateEventAttendance} />
//