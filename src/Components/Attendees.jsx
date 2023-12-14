import Attendee from "./Attendee";
import { useState } from "react";

export default function Attendees({events}) {
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
        <div className="attendees">
            <Attendee />
        </div>
      ) : null}
    </>
  )
}
