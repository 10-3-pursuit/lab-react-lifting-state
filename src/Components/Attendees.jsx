import Attendee from "./Attendee";
export default function Attendees({ showAttendees, attendees, event, updateEventAttendance, toggleEventAttendees }) {
  if (!showAttendees) return null;
  return (
     <div className="attendees">
      <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
      {showAttendees ? (
      <div key={event.id} className="attendees">
        {attendees.map(attendee => (
        // add attendee prop here where HTML code used to be (HTML placed in Attendee component)
        <Attendee key={attendee.id} attendee={attendee} updateEventAttendance={updateEventAttendance} />
        ))}
      </div>
      ) : null}
      </>
    </div>
  );
}