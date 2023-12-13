import { useState } from "react";
import eventsData from "./data";
import { v1 as generateUniqueID } from "uuid";
// import Attendees from "./Attendees";
import Event from "./Components/Event";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  const [selectOption, setSelectOption] = useState("");

  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  function addEvent() {
    const createEvent = {
      id: generateUniqueID(),
      eventType: selectOption,
      name: newEvent.name,
      organizer: newEvent.organizer,
      eventImage: newEvent.eventImage || "https://loremflickr.com/640/480/",
      date: newEvent.date,
      people: [],
    };
    handleAddEvent(createEvent);
  }

  function handleSelectChange(e) {
    setSelectOption(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addEvent();
    resetEventForm();
  }

  function handleTextChange(e) {
    setNewEvent({
      ...newEvent,
      [e.target.id]: e.target.value,
    });
  }

  function resetEventForm() {
    setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
    });
    setSelectOption("");
  }

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

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
    <div className="App">
      <>
        <header>
          <h1 className="color-change-5x">RSVP App</h1>
        </header>
      </>
      <main>
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
        <div className="events">
          <ul>
            {events.map((event) => {
              const { people: attendees } = event;
              // create a new component for the list item being returned
              return <Event key={event.id} event={event} attendees={attendees} updateEventAttendance={updateEventAttendance} useState={useState} />
            })}
          </ul>
        </div>
      </main>
      <>
        <footer>
          <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Legal</li>
          </ul>
        </footer>
      </>
    </div>
  );
}

export default App;
