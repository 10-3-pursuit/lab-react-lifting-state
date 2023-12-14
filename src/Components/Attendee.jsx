// Attendee.jsx
import React from 'react';

const Attendee = ({ attendee, updateAttendance, eventId }) => {
  return (
    <div key={attendee.id} className="attendee">
      <p>
        <img src={attendee.avatar} alt={attendee.firstName} />
        {'   '}
        <span>
          {' '}
          {attendee.firstName} {attendee.lastName}{' '}
        </span>
      </p>
      <p>
        <button className="clickable" onClick={() => updateEventAttendance(eventId, attendee.id)}>
          Attending:
        </button>
        <span>{attendee.attendance ? '✅' : '❌'}</span>
      </p>

      <p>
        <span>Note:</span> {attendee.note}
      </p>
    </div>
  );
};

export default Attendee;
