const Event = require('events');

const eventEmitter = new Event();

eventEmitter.on('start', () => console.log('started'));
eventEmitter.on('end', () => console.log('ended'));

eventEmitter.emit('start');
eventEmitter.emit('end');
eventEmitter.emit('start');
