import Attendee from "./Attendee";
export default function Attendees({ showAttendees, attendees, event, updateEventAttendance, toggleEventAttendees }) {
  if (!showAttendees) return null;
  return (
     <div className="attendees">
      <>
                      <button onClick={toggleEventAttendees}>
                        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
                      </button>

                      {showAttendees ? (
                        <div className="attendees">
                          {attendees.map((attendee) => (
                            <>
                            {/* goes in Attendee.jsx */}
                              {/* <div key={attendee.id} className="attendee">
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
                              </div> */}
                            </>
                          ))}
                        </div>
                      ) : null}
                    </>
    </div>
  );
}
