import React from "react";

export default function Attendee({ handleAttendanceToggle, attendee, attendeeStatus }) {
  return (
    <div className="attendee">
      <p>
        <img src={attendee.avatar} alt={attendee.firstName} />
        {'   '}
        <span>
          {' '}
          {attendee.firstName} {attendee.lastName}{' '}
        </span>
      </p>
      <p>
        <button
          className="clickable"
          onClick={() => handleAttendanceToggle(attendee.id)}
        >
          Attending:
        </button>
        <span>{attendeeStatus[attendee.id] ? '✅' : '❌'}</span>
      </p>
      <p>
        <span>Note:</span> {attendee.note}
      </p>
    </div>
  );
}
