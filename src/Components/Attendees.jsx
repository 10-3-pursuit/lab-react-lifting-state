// Attendees.jsx
import React from 'react';
import Attendee from './Attendee';

const Attendees = ({ attendees, updateAttendance, eventId }) => {
  return (
    <div className="attendees">
      {attendees.map((attendee) => (
        <Attendee key={attendee.id} attendee={attendee} updateAttendance={updateAttendance} eventId={eventId} />
      ))}
    </div>
  );
};

export default Attendees;
