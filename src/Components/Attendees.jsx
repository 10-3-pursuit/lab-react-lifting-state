import { useState } from "react";
import Attendee from "./Attendee"

export default function Attendees({ attendees, event }) {
  const [attendeeStatus, setAttendeeStatus] = useState({});

  const handleAttendanceToggle = (attendeeId) => {
    
    const currentStatus = attendeeStatus[attendeeId] || false;

    setAttendeeStatus({
      ...attendeeStatus,
      [attendeeId]: !currentStatus,
    });
  };

  return (
    <div className="attendees">
       {attendees.map((attendee) => (
        <Attendee
          key={attendee.id}
          attendee={attendee}
          handleAttendanceToggle={handleAttendanceToggle}
          attendeeStatus={attendeeStatus}
        />
      ))}
    </div>
  );
}