# Why move these helper functions and useStates?
Simplifying Parent Component (App.jsx): By moving this state and logic out of App.jsx, you're simplifying the parent component. App.jsx should ideally be focused on higher-level app structure and state, delegating specific tasks to child components. This separation of concerns makes your app more modular and easier to manage.

## Helper Functions moved to NewEventForm.jsx
`NewEventForm` is responsible for handling the creation of new events, so it makes sense to encapsulate all the state and logic needed for this task within it. This makes `NewEventForm` a self-contained component that can be easily understood, maintained, and reused. Forms often have their own state and logic that's not relevant to the rest of the app. Keeping this logic in the form component itself makes the form easier to manage and modify.

```js
const [selectOption, setSelectOption] = useState(""); 
// Initializes selectOption state to an empty string. 
// It holds the selected option for the event type.

const [newEvent, setNewEvent] = useState({
  id: "",
  eventType: "",
  name: "",
  organizer: "",
  eventImage: "",
  date: "",
  people: [],
});

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
    people: []
  });
  setSelectOption("");
}

function addEvent() {
  const createEvent = {
    id: generateUniqueID(),
    eventType: selectOption,
    name: newEvent.name,
    organizer: newEvent.organizer,
    eventImage: newEvent.eventImage || null,
    date: newEvent.date,
    people: []
  };
  handleAddEvent(createEvent);
}
```

## Helper Functions sent to Event.jsx
```js
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  const [showAttendees, setShowAttendees] = useState(false); // This controls whether the attendees of an event are displayed.
```