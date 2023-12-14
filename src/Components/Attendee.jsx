export default function Attendee({ attendees, event}) {
  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance;
    event.people = peopleArray;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }
  return (
    <>
      {attendees.map((attendee, index) => (
        <div key={attendee.id} className="attendee">
          <p>
            <img
              src={attendee.avatar}
              alt={attendee.firstName}
            />
            {"   "}
            <span>
              {" "}
              {attendee.firstName} {attendee.lastName}{" "}
            </span>
          </p>
          <p>
            <button
              className="clickable"
              onClick={() =>
                updateEventAttendance(
                  event.id,
                  attendee.id
                )
              }
            >
              Attending:
            </button>
            <span>
              {attendee.attendance ? "✅" : "❌"}
            </span>
          </p>
          <p>
            <span>Note:</span> {attendee.note}
          </p>
        </div>
      ))}
    </>
  );
}
