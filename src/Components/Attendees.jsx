import Attendee from "./Attendee";

// use the props
export default function Attendees({
  showAttendees,
  attendees,
  toggleEventAttendees,
  event,
  updateEventAttendance,
}) {
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div key={event.id} className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee key={attendee.id} attendee={attendee} update />
          ))}
        </div>
      ) : null}
    </>
  );
}
