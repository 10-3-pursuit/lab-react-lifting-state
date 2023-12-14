import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees({attendees, event, updateEventAttendance}) {

  const [showAttendees, setShowAttendees] = useState(false);

  
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  
  return(
   <>
   <button onClick={toggleEventAttendees}>
    {!showAttendees ? "Show Attendees" : "Hide Attendees"}
  </button>

  {showAttendees ? (
    <div className="attendees">
      {attendees.map((attendee, index) => (
         <Attendee event={event} attendee={attendee} updateEventAttendance={updateEventAttendance} key={attendee.id} />
      ))}
    </div>
  ) : null}
  </>
  )
}
