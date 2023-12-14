import { useState } from "react";
import Attendees from "./Attendees";

export default function Event({ events, updateEventAttendance }) {
  const [visibleEventId, setVisibleEventId] = useState(null);

  function toggleEventAttendees(eventId) {
    setVisibleEventId(visibleEventId === eventId ? null : eventId);
  }

  return (
    <div className="events">
      <ul>
        {events.map((event) => {
          const isAttendeesVisible = visibleEventId === event.id;

          return (
            <li key={event.id}>
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <span>Organized by: {event.organizer} </span>
              <br />
              <button onClick={() => toggleEventAttendees(event.id)}>
                {!isAttendeesVisible ? "Show Attendees" : "Hide Attendees"}
              </button>

              {isAttendeesVisible && (
                <Attendees
                  attendees={event.people}
                  event={event}
                  updateEventAttendance={(attendeeId) =>
                    updateEventAttendance(event.id, attendeeId)
                  }
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
