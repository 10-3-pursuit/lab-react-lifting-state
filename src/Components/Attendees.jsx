import Attendee from "./Attendee";
export default function Attendees({ showAttendees, attendees, event, updateEventAttendance, toggleEventAttendees }) {
  //if (!showAttendees) return null;
  return (
    // removed extra div with className attendees
      <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
      {showAttendees ? (
        // corrected className syntax error
      <div key={event.id} className="attendee">
        {attendees.map(attendee => (
        // add attendee prop here where HTML code used to be (HTML placed in Attendee component)
        <Attendee key={attendee.id} attendee={attendee} event={event} updateEventAttendance={updateEventAttendance} />
        ))}
      </div>
      ) : null}
      </>
  );
}