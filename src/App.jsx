import { useState } from "react";
import eventsData from "./data";

//import Attendee from "./Components/Attendee";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  
  const [events, setEvents] = useState(eventsData); // const [events, setEvents] = useState(eventsData);: Initializes events state with eventsData. This state holds the array of event objects.

  // sent to Events.jsx
  // const [showAttendees, setShowAttendees] = useState(false); // This controls whether the attendees of an event are displayed.

  // NewEventForm.jsx
  // const [selectOption, setSelectOption] = useState(""); // const [selectOption, setSelectOption] = useState("");: Initializes selectOption state to an empty string. It holds the selected option for the event type.

  // const [newEvent, setNewEvent] = useState({
  //   id: "",
  //   eventType: "",
  //   name: "",
  //   organizer: "",
  //   eventImage: "",
  //   date: "",
  //   people: [],
  // });


// moved to NewEventForm.jsx
  // function handleSelectChange(e) {
  //   setSelectOption(e.target.value);
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   addEvent();
  //   resetEventForm();
  // }

  // sent to the NewEventForm.jsx
  // function handleTextChange(e) {
  //   setNewEvent({
  //     ...newEvent,
  //     [e.target.id]: e.target.value,
  //   });
  // }


  // function resetEventForm() {
  //   setNewEvent({
  //     id: "",
  //     eventType: "",
  //     name: "",
  //     organizer: "",
  //     eventImage: "",
  //     date: "",
  //   });
  //   setSelectOption("");
  // }


  // sent to NewEventForm.jsx
  // function addEvent() {
  //   const createEvent = {
  //     id: generateUniqueID(),
  //     eventType: selectOption,
  //     name: newEvent.name,
  //     organizer: newEvent.organizer,
  //     eventImage: newEvent.eventImage || null,
  //     date: newEvent.date,
  //     people: [],
  //   };
  //   handleAddEvent(createEvent);
  // }

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }
// sent to Events.jsx
  // function toggleEventAttendees() {
  //   setShowAttendees(!showAttendees);
  // }

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
        <Header />
      </>
      <main>
        <NewEventForm
        addEvent={addEvent} handleSubmit={handleSubmit} handleTextChange= {handleTextChange} newEvent = {newEvent} handleSelectChange={handleSelectChange} />
          <div className="events">
          <ul>
          {events.map((event) => {
              const { people: attendees } = event;
              return <Event key={event.id} events={events} attendees={attendees} updateEventAttendance={updateEventAttendance}/>
            })}
          </ul>
          </div>
      </main>
        <Footer />
    </div>
  );
}

export default App;