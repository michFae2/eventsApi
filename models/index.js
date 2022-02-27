/* 
This file contains Event data. In the real-world, we would probably get this data from a database. However for now - we're hardcoding the data here.

You shouldn't change anything in this file.

eventIdsToAttendeeIds: A dictionary with eventIds for keys and a list of attendeeIds for values.
events: A list of Event Objects. None of the feilds are nullable.
*/


export const eventIdsToAttendeeIds = {
  "E0": ["A0", "A3", "A5", "A10", "A14", "A20", "A22", "A29", "A30", "A31", "A39", "A40", "A41", "A44", "A49"],
  "E1": ["A2", "A4", "A7", "A13", "A15", "A18", "A23", "A25", "A33", "A38", "A39"],
  "E2": ["A4", "A6", "A8", "A11", "A17", "A26", "A34", "A36", "A37", "A42", "A43", "A45", "A46"],
  "E3": ["A3", "A6", "A11", "A14", "A15", "A28", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A47"],
  "E4": ["A10", "A12", "A13", "A18", "A22", "A24", "A35", "A45", "A47", "A48"],
  "E5": ["A1", "A4", "A7", "A8", "A9", "A10", "A12", "A21", "A23", "A26", "A29", "A34", "A41", "A42", "A43"],
  "E6": ["A0", "A3", "A5", "A19", "A20", "A21", "A33"],
  "E7": ["A7", "A8", "A9", "A12", "A13", "A15", "A16", "A19", "A20", "A22", "A25", "A39"],
  "E8": ["A0", "A1", "A2", "A10", "A11", "A20", "A24", "A26", "A32", "A38", "A41"],
  "E9": ["A3", "A4", "A6", "A9", "A34", "A37", "A40", "A41", "A45", "A48"],
  "E10": ["A4", "A8", "A14", "A18", "A24", "A27", "A28", "A31", "A39", "A40", "A49"],
  "E11": ["A0", "A1", "A5", "A12", "A16", "A18", "A26", "A33", "A34", "A43"],
  "E12": ["A2", "A7", "A12", "A13", "A25", "A31", "A38", "A43", "A45", "A46"],
  "E13": ["A1", "A6", "A11", "A14", "A15", "A28", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A47"],
  "E14": ["A11", "A12", "A17", "A18", "A22", "A24", "A35", "A45", "A47", "A48"],
  "E15": ["A1", "A4", "A7", "A8", "A10", "A12", "A21", "A23", "A26", "A29", "A34", "A41", "A42", "A43"],
  "E16": ["A2", "A3", "A5", "A19", "A20", "A21", "A33"],
  "E17": ["A7", "A8", "A9", "A12", "A13", "A15", "A16", "A19", "A20", "A22", "A25", "A39"],
  "E18": ["A0", "A2", "A10", "A14", "A20", "A24", "A26", "A32", "A38", "A41"],
  "E19": ["A3", "A4", "A6", "A9", "A34", "A37", "A40", "A41", "A45", "A48"],
  "E20": ["A1", "A3", "A5", "A10", "A14", "A20", "A22", "A29", "A30", "A31", "A39", "A40", "A41", "A44", "A49"],
  "E21": ["A2", "A4", "A7", "A13", "A15", "A18", "A23", "A25", "A33", "A38", "A39"],
  "E22": ["A4", "A6", "A8", "A11", "A17", "A26", "A34", "A36", "A37", "A42", "A43", "A45", "A46"],
  "E23": ["A3", "A6", "A11", "A14", "A15", "A28", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A47"],
  "E24": ["A10", "A12", "A13", "A18", "A22", "A24", "A35", "A45", "A47", "A48"],
  "E25": ["A1", "A4", "A7", "A8", "A9", "A10", "A12", "A21", "A23", "A26", "A29", "A34", "A41", "A42", "A43"],
  "E26": ["A0", "A3", "A5", "A19", "A20", "A21", "A33"],
  "E27": ["A7", "A8", "A9", "A12", "A13", "A15", "A16", "A19", "A20", "A22", "A25", "A39"],
  "E28": ["A0", "A1", "A2", "A10", "A11", "A20", "A24", "A26", "A32", "A38", "A41"],
  "E29": ["A3", "A4", "A6", "A9", "A34", "A37", "A40", "A41", "A44"],
  
};

export const events = [
    {
      eventId: "E0",
      name: "Into the Unkown Web3 World",
      description: "Sometimes you just gotta let it go.",
      eventType: "POSTER_SESSION"
    },
    {
      eventId: "E1",
      eventType: "PRESENTATION",
      name: "NFTs and the Environment",
      description: "Dive into the details of NFTs and their environmental impact."
    },
    {
      eventId: "E2",
      eventType: "WORKSHOP",
      name: "Rust is Among Us",
      description: "Learn about the fundamentals of Rust."
    },
    {
      eventId: "E3",
      eventType: "POSTER_SESSION",
      name: "Artificial Intelligence For All",
      description: "How to use AI to make accessible technology."
    },
    {
      eventId: "E4",
      eventType: "PRESENTATION",
      name: "Things I wish I new before joining the tech workforce",
      description: "Hindsight is 20/20. And my 2020 was terrible."
    },
    {
      eventId: "E5",
      eventType: "PRESENTATION",
      name: "Kudos to you for actually reading the data :)",
      description: "You might wanna continue working on the rest of the project now :P"
    },
    {
      eventId: "E6",
      eventType: "WORKSHOP",
      name: "DANCE DANCE!",
      description: "A Fun dance workshop to relieve stress!"
    },
    {
      eventId: "E7",
      eventType: "POSTER_SESSION",
      name: "Hopping into Grace Hopper",
      description: "How to give a great Grace Hopper talk."
    },
    {
      eventId: "E8",
      eventType: "POSTER_SESSION",
      name: "Change your Career",
      description: "Switching careers is tricky - but not impossible. Learn how you can make a clean career switch."
    },
    {
      eventId: "E9",
      eventType: "WORKSHOP",
      name: "Starting Straight Away",
      description: "A workshop to help you learn how to adapt to change - starting straight away."
    },
    {
      eventId: "E10",
      eventType: "PANEL",
      name: "Next is Now - WFH is now, so it might be next",
      description: "This panel focuses on how to stay focused in a work from home environment."
    },
    {
      eventId: "E11",
      eventType: "PRESENTATION",
      name: "Ethics of self driving vehicles",
      description: "Ethical choices. Every second. Everyday. Learn how automated vehicles do this."
    },
    {
      eventId: "E12",
      eventType: "WORKSHOP",
      name: "Code & Deploy Your Own Website",
      description: "This workshop will help you start coding a vanilla javascript, react, and css website."
    },
    {
      eventId: "E13",
      eventType: "PANEL",
      name: "Intro to Open Source",
      description: "This panel brings together a group of diverse women in CS to introduce you to open source tech."
    },
    {
      eventId: "E14",
      eventType: "PRESENTATION",
      name: "Have the most fun!",
      description: "Learn how to have the most fun - on the job!"
    },
    {
      eventId: "E15",
      eventType: "PRESENTATION",
      name: "How Technology Advocates for Underrepresented Voices",
      description: "In this talk, learn about how technology can help us increase diversity."
    },
    {
      eventId: "E16",
      eventType: "WORKSHOP",
      name: "Intern Networking Session",
      description: "Get to know your peers at this intern networking session!"
    },
    {
      eventId: "E17",
      eventType: "POSTER_SESSION",
      name: "You're Asking the Wrong Questions!",
      description: "Learn how to ask the right ones"
    },
    {
      eventId: "E18",
      eventType: "POSTER_SESSION",
      name: "Mixed Reality Research",
      description: "Have you ever wondered what the difference is between AR, VR, and mixed reality? Well - it's time to find out!"
    },
    {
      eventId: "E19",
      eventType: "WORKSHOP",
      name: "Turn a Social Club into an Impactful Program",
      description: "Create a sense of community at your company."
    },
    {
      eventId: "E20",
      eventType: "POSTER_SESSION",
      name: "Next is Inclusion",
      description: "Inclusion is now. Inclusion is the future. What can you do to improve it?"
    },
    {
      eventId: "E21",
      eventType: "PRESENTATION",
      name: "You let me down - but I won't let you down",
      description: "How to work with people you're not a fan of."
    },
    {
      eventId: "E22",
      eventType: "WORKSHOP",
      name: "Change Agents",
      description: "Learn about to drive change and make next, now."
    },
    {
      eventId: "E23",
      eventType: "POSTER_SESSION",
      name: "Research - C++ Smart Pointer Improvements",
      description: "Dive into the novel C++ Smart Pointer Changes"
    },
    {
      eventId: "E24",
      eventType: "MENTORING_CIRCLES",
      name: "Do you know what's wrong?",
      description: "Join us and learn how to identify the now problems and fix them asap."
    },
    {
      eventId: "E25",
      eventType: "PRESENTATION",
      name: "Git Revert",
      description: "Undo mistakes now - so what's next is fine"
    },
    {
      eventId: "E26",
      eventType: "WORKSHOP",
      name: "Eat & Meet!",
      description: "Eat & Meet fellow people in tech who all advocate for a more inclusive environment."
    },
    {
      eventId: "E27",
      eventType: "POSTER_SESSION",
      name: "GraphQL Basics",
      description: "GraphQL Basics"
    },
    {
      eventId: "E28",
      eventType: "POSTER_SESSION",
      name: "Fireship Basics",
      description: "An intro to fireship and why its great."
    },
    {
      eventId: "E29",
      eventType: "TECH_MEETUP",
      name: "NP Hard",
      description: "Learn how to prove P=NP ... just kidding :D"
    },
  ];