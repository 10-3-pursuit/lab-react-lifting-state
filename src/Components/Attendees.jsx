import React, { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees({ attendees, updateEventAttendance, event }) {
  const [showAttendees, setShowAttendees] = useState(false);

  const toggleAttendees = () => {
    setShowAttendees(!showAttendees)
  }

  return (
    <>
      <button onClick={toggleAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees && (
        <div className="attendees">
          {attendees.map((attendee) => (
            <Attendee
              key={attendee.id}
              attendee={attendee}
              updateEventAttendance={updateEventAttendance}
              event={event}
            />
          ))}
        </div>
      )}
    </>
  );
}
