import Attendee from "./Attendee";
export default function Attendees({showAttendees,attendees,updateEventAttendance,event}) {
  
  return(
    <>
    {showAttendees ? (
      <div className="attendees">
        {attendees.map((attendee, index) => (
          <Attendee
            key={attendee.id}
            attendee={attendee}
            updateEventAttendance={updateEventAttendance}
            event={event}
          />
        ))}
      </div>
    ) : null}
  </>
);
}
