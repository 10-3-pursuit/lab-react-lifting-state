
import Attendee from "./Attendee";

export default function Attendees({ event, events, setEvents }) {
  const { people: attendees } = event;

  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <Attendee key={index} attendee={attendee} event={event} events={events} setEvents={setEvents}></Attendee>
      ))}
    </div>
  );
}
