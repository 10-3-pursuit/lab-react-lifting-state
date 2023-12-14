// Event.jsx
import React, { useState } from 'react';
import Attendees from './Attendees';

const Event = ({ event, updateEventAttendance }) => {
  const [showAttendees, setShowAttendees] = useState(false);

  return (
    <li>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <button onClick={() => setShowAttendees(!showAttendees)}>
        {!showAttendees ? 'Show Attendees' : 'Hide Attendees'}
      </button>

      {showAttendees && <Attendees attendees={event.people} updateAttendance={updateEventAttendance} eventId={event.id} />}
    </li>
  );
};

export default Event;
