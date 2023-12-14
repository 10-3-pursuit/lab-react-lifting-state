import React, { useState } from 'react';
import Attendee from './Attendee';

const Attendees = ({ attendees, updateEventAttendance, event }) => {
  const [showAttendees, setShowAttendees] = useState(false);

  const toggleEventAttendees = () => {
    setShowAttendees(!showAttendees)
  }

  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div key={event.id} className='attendees'>
          {attendees.map((attendee) => (
            <Attendee key={attendee.id} attendee={attendee} updateEventAttendance={updateEventAttendance} event={event} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Attendees;