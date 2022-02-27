import { gql } from 'apollo-server';

export default gql`

# We extend the Attendee type from the Attendee service.
# Our gateway only needs a reference to the Type via primary key
# to enable ALL product data to be resolved from the Attendee service.

extend type Attendee @key(fields: "attendeeId") {
  attendeeId: ID! @external
  events: [Event!]
}

enum EventType {
  PANEL
  PRESENTATION
  WORKSHOP
  POSTER_SESSION
  MENTORING_CIRCLES
  TECH_MEETUP
}

type Event @key(fields: "eventId") {
  eventId: ID!
  name: String!
  description: String!
  eventType: EventType!
  attendees: [Attendee!]
}
type Query {
  getEvents: [Event!]
  getEventById(eventId: ID!): Event  # Set to nullable since we will return null if event doesn't exist
}
  
`;