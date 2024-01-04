
import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";
export default function NewEventForm({ handleAddEvent }) {

  const [selectOption, setSelectOption] = useState(""); // const [selectOption, setSelectOption] = useState("");: Initializes selectOption state to an empty string. It holds the selected option for the event type. Tracks the selected event type.

  const [newEvent, setNewEvent] = useState({ //used to define newEvent state, which holds the current state of the form fields. Each field in the newEvent object corresponds to a field in your form.
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  function handleTextChange(e) { // updates the newEvent state when a text field in the form changes
    setNewEvent({
      ...newEvent, // spread operator used to keep the existing state (makes copy of newEvent), and [e.target.id]: e.target.value updates the specific field that triggered the change
      [e.target.id]: e.target.value,
    });
  }

  function handleSelectChange(e) { // specifically for handling changes in the select dropdown
    setSelectOption(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault(); //  stops the default form submission behavior, which would cause a page reload
    addEvent(); // creates/appends new event object after clicking submit button(callback fx from line 45)
    resetEventForm(); // resets form to initial state after clicking submit button (callback fx from line 33)
  }
  function resetEventForm() { // resets form to initial state; will be used for handleSubmit fx
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

  function addEvent() { // creates/appends new event object using the current state (newEvent and selectOption); used as callback for handleSubmit fx
    const createEvent = {
      id: generateUniqueID(), // generates id using installed npm package
      eventType: selectOption,
      name: newEvent.name,
      organizer: newEvent.organizer,
      eventImage: newEvent.eventImage || "https://loremflickr.com/640/480/",
      // changed null back to original value (string representing a link to an image)
      date: newEvent.date,
      people: [],
    };
    handleAddEvent(createEvent); // callback located in App.jsx because uses events useState which is also in App.jsx because it needs to be accessed by other components (it contains the eventsData)
  }

  return (
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
  );
}
