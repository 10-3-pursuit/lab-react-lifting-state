import Attendee from "./Attendee"
import { useState } from "react"
export default function Attendees({ attendees, updateEventAttendance, event}) {
  const [showAttendees, setShowAttendees] = useState(false)

  const toggleAttendees = () => {
    setShowAttendees(!showAttendees)
  }
  return (<>
    <button onClick={toggleAttendees}>
      {!showAttendees ? "Show Attendees" : "Hide Attendees"}
    </button>

    {showAttendees ? (
      <div className="attendees">
        {attendees.map((attendee, index) => (
          <Attendee key={attendee.id} attendee={attendee} updateEventAttendance={updateEventAttendance} event={event}/>
        ))}
      </div>
    ) : null}
  </>)
}
