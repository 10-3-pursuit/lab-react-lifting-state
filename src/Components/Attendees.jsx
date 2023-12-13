import Attendee from "./Attendee"
export default function Attendees({toggleEventAttendees, showAttendees, attendees}) {
  return (<>
    <button onClick={toggleEventAttendees}>
      {!showAttendees ? "Show Attendees" : "Hide Attendees"}
    </button>

    {showAttendees ? (
      <div className="attendees">
        {attendees.map((attendee, index) => (
          <Attendee key={attendee.id} attendee={attendee} />
        ))}
      </div>
    ) : null}
  </>)
}
