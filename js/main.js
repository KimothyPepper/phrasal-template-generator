var makeStory = alert('Let’s make a story together!');

var colour = prompt('A colour (orange, indigo, etc.)');

var creature = prompt('A creature (dragon, moth, etc.)');

var adjective = prompt('An adjective (beautiful, super, etc.)');

var verbed = prompt('A past tense verb (ran, burped, etc.)');

var story = prompt('Which story would you like?\na) Snacking\n b) Escaping\n c) Winning\n Enter the letter below:');

if (story == 'a') {
  document.write('After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + ' ' + verbed + ' for hours.');
}

if (story == 'b') {
  document.write('Ameilia ' + verbed + ' through the ' +  adjective + ' ' + colour + ' nebula escaping the space ' + creature + '.');
}

if (story == 'c') {
  document.write('Jackson chose his ' + adjective + ', ' + colour + ' ' + creature + ' card and ' + verbed + ' it to the table knowing he won.');
}
