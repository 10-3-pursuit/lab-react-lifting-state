import { useState } from "react";
import eventsData from "./data";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  return (
    <div className="App">
      <>
        <Header></Header>
      </>
      <main>
        <NewEventForm events={events} setEvents={setEvents} ></NewEventForm>
        <div className="events">
          <ul>
            {events.map((event) => {
              return (
                <Event key={event.id} event={event}> events={events} setEvents={setEvents}</Event>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
