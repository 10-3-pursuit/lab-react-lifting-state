export default function NewEventForm({ handleSubmit, handleTextChange, newEvent, handleSelectChange }) {
  function addEvent() {
    const createEvent = {
      id: generateUniqueID(),
      eventType: selectOption,
      name: newEvent.name,
      organizer: newEvent.organizer,
      eventImage: newEvent.eventImage || null,
      date: newEvent.date,
      people: [],
    };
    handleAddEvent(createEvent);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addEvent();
    resetEventForm();
  }
  return (
    <div className="new-event">
        <div className="new-event">
          <>
            <form onSubmit={handleSubmit}>
              <h3>Create a new event</h3>
              <label htmlFor="name">Event name:</label>
              <input
                type="text"
                id="name"
                onChange={handleTextChange}
                value={newEvent.name}
              />

              <label htmlFor="organizer">Organizer:</label>
              <input
                type="text"
                id="organizer"
                onChange={handleTextChange}
                value={newEvent.organizer}
              />

              <label htmlFor="eventImage">Event image:</label>
              <input
                type="text"
                id="eventImage"
                onChange={handleTextChange}
                value={newEvent.eventImage}
              />
              <label htmlFor="eventType">Event type:</label>
              <select id="eventType" onChange={handleSelectChange}>
                <option value=""></option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Intramural Sport">Intramural Sport</option>
                <option value="Watch Party">Watch Party</option>
                <option value="wedding">Wedding</option>
              </select>
              <br />
              <input type="submit" />
            </form>
          </>
        </div>
        </div>
  );
}
