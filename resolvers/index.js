// import events data
import { events, eventIdsToAttendeeIds } from '../models';

// Define resolvers
export default {
  Query: {
    getEvents: async () => {
      // RETURN a list of events
      // Note: the function signature can also be written as async (parentObj, args, context, info), just like in graphQL
      return events;
    },
    getEventById: async (_, { eventId }) => {
      // RETURN an event which has the same eventId as eventId
      // Note: the function signature can also be written as async (parentObj, args, context, info).
      return events.find((event) => event.eventId === eventId);
    }
  },
  Event: {
    // Our Event contains the Attendee entity extended from the attendees service
    // To resolve attendee data, we send an attendee reference to find the owner subgraph of the attendee
    attendees(parent) {
      // 'parent' contains attendee information including the attendee id, which is the same value as the attendee id
      // RETURN a list of attendees that attended an event with parent.eventId
      const attendeeIds = eventIdsToAttendeeIds[parent.eventId];
      let attendeeList = [];
      attendeeIds.forEach(attendeeId => attendeeList.push({ __typename: "Attendee", attendeeId: attendeeId }));
      return attendeeList;
    },  

    // Reference resolver - used by services querying event entities
    __resolveReference(parent) {
      // RETURN the event with the same eventId as parent.eventId
      return events.find((event) => event.eventId === parent.eventId);
    }
  },

  Attendee: {
      events(parent) {
        // RETURN a list of events that have this attendee.attendeeId as a user
        let eventList = [];
        for (const [eventId, attendeeList] of Object.entries(eventIdsToAttendeeIds)) {
          if (attendeeList.includes(parent.attendeeId))
          {
            // get event number (without the E) and use it to index the events array
            const eventNumber = Number(eventId.match(/\d+/));
            eventList.push(events[eventNumber]);
          }
        }
        return eventList;
    },  
  },
};