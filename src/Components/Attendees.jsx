import Attendee from "./Attendee";

export default function Attendees({ toggleEventAttendees, showAttendees, attendees, event, updateEventAttendance }) {
  return(
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee key={attendee.id} attendee={attendee} event={event} updateEventAttendance={updateEventAttendance}/>
          ))}
        </div>
      ) : null}
    </>
  );
}
