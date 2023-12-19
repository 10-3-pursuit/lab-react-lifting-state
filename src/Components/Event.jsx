import Attendees from "./Attendees";

export default function Event({
  events,
  toggleEventAttendees,
  showAttendees,
  updateEventAttendance,
}) {
  return (
    <ul>
      {events.map((event) => {
        const { people: attendees } = event;

        return (
          <>
            <li key={event.id}>
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <span>Organized by: {event.organizer} </span>
              <br />

              <Attendees
                showAttendees={showAttendees}
                toggleEventAttendees={toggleEventAttendees}
                attendees={attendees}
                updateEventAttendance={updateEventAttendance}
                event={event}
              />
            </li>
          </>
        );
      })}
    </ul>
  );
}
