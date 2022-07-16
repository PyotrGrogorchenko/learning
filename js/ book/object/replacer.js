const room = {
  number: 23
}

const meetup = {
  title: 'Совещание',
  speakers: [{user: 'Иванов'}, {user: 'Петров'}],
  occupiedBy: [{name: 'Иванов'}, {name: 'Петров'}],
  place: room
}

console.log(JSON.stringify(meetup, ['title', 'speakers', 'user']))

room.occupiedBy = meetup;
meetup.self = meetup;

const replacer = (key, value) => {
  return (key !== '' && value === meetup) ? undefined : value
}

console.log(JSON.stringify(meetup, replacer))
