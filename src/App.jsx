import { useState } from "react";
import eventsData from "./data";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData); // const [events, setEvents] = useState(eventsData);: Initializes events state with eventsData. This state holds the array of event objects.

  function handleAddEvent(event) { // called when new event created
    setEvents([event, ...events]); // adds new event to beginning of shallow copy of events array (spread operator makes shallow copy)
  }

  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events]; // makes shallow copy of the events array
    const eventIndex = eventArray.findIndex((event) => eventId === event.id); // using callback fx event uses event.id to check elements while iterating through eventArray until finds index of element with matching event.id
    const event = { ...eventArray[eventIndex] }; // creates a shallow copy of the event object to be updated to avoid direct mutation of the event object in the state
    const personIndex = event.people.findIndex( // find the index of the specific attendee in the event's 'people' array identified by their unique 'attendeeId'
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people]; // create a shallow copy of the event's 'people' array to allow update of the attendee's attendance status
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance; // toggle attendance status of the attendee && if marked as attending, they will now be marked as not attending, and vice versa

    event.people = peopleArray; // updates the event's 'people' array with the modified 'peopleArray' lol javascript stuff
    eventArray[eventIndex] = event; // updates the specific event in the 'eventArray' with the updated 'event'
    setEvents(eventArray); // sets new 'eventArray' as the updated state to re-render the components that depend on the 'events' state.
  }

  return (
    <div className="App">
      <Header />
      <main>
      <div className="new-event">
        <NewEventForm handleAddEvent={handleAddEvent} useState={useState} />
      </div>
      <div className="events">
        <ul>
          {events.map((event) => {
              const { people: attendees } = event;
              // list item being returned (see Event.jsx for contents of props) fixed typo (prop is supposed to be event={event})
              return <Event key={event.id} event={event} attendees={attendees} updateEventAttendance={updateEventAttendance} useState={useState}/>
          })}
        </ul>
      </div>
      </main>
        <Footer />
    </div>
  );
}

export default App;