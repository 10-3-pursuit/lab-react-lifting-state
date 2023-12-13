
import Attendee from "./Attendee"
import { useState } from "react";
export default function Attendees({updateEventAttendance,attendees,event}) {
  const [showAttendees, setShowAttendees] = useState(false);


  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return (
    <>
    <button onClick={toggleEventAttendees}>
      {!showAttendees ? "Show Attendees" : "Hide Attendees"}
    </button>
    {showAttendees ? (
      <div key={event.id}className="attendees">
        {attendees.map((attendee, index) => (
          <Attendee key={attendee.id} updateEventAttendance={updateEventAttendance} attendee={attendee} event={event}/>
        ))}
      </div>
    ) : null}
    </>
  )
}
