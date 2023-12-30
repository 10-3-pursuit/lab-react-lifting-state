import Attendees from "./Attendees"

export default function Event({ event, attendees, toggleEventAttendees, updateEventAttendance, showAttendees  }) {
  return(
    <li key={event.id}>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <Attendees 
      attendees={attendees}
      toggleEventAttendees={toggleEventAttendees} 
      updateEventAttendance={updateEventAttendance} 
      showAttendees={showAttendees}
      event={event}
      />
    </li>
  )
}
