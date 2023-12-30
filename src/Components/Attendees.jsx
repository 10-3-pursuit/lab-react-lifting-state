import Attendee from "./Attendee"

export default function Attendees({ event, attendees, toggleEventAttendees, updateEventAttendance, showAttendees}) {
  return(
    <>
    <button onClick={toggleEventAttendees}>
      {!showAttendees ? "Show Attendees" : "Hide Attendees"}
    </button>

    {showAttendees ? (
      <div className="attendees">
        {attendees.map((attendee, index) => (
          <Attendee 
            key={index}
            attendee={attendee}
            event={event}
            updateEventAttendance={updateEventAttendance}
          />
        ))}
      </div>
    ) : null}
  </>
  )
}
