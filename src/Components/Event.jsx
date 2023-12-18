import { useState } from "react"
import Attendees from './Attendees';
export default function Event({ events, toggleEventAttendees, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);
  return (



<div className="events">
          <ul>
            {events.map((event) => {
              const { people: attendees } = event;

              return (
                <>
                  <li key={event.id}>
                    <img src={event.eventImage} alt={event.name} />
                    <h5>
                      {event.name} {event.eventType}
                    </h5>
                    <br />
                    <span>Organized by: {event.organizer} </span>
                    <br />
                    <>
                      <button onClick={toggleEventAttendees}>
                        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
                      </button>

                      {showAttendees ? (
                        <div className="attendees">
                          {attendees.map((attendee) => (
                            <>
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
                            </>
                          ))}
                        </div>
                      ) : null}
                    </>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
  )
}


// attendees is nested inside events so add html for attendees to Attendees.jsx
//might have to import useStates or functions

{/* <li key={event.id}> */}
{/* event details and attendees toggle button */}
{/* <Attendees  */}
//   showAttendees={showAttendees} 
//   attendees={event.people} 
//   eventId={event.id} 
//   updateEventAttendance={updateEventAttendance}
// />
// </li>