const {register, useStream, useEvent, useAction, useTrigger} = require('bara');
const {watcherStream} = require('./bara-stream/watcher.stream');
const {ON_FILE_ADDED} = require('./bara-stream/watcher.event');


const fileTrigger = {
  name: 'File TXT Trigger',
  event: useEvent(ON_FILE_ADDED),
  action: useAction((data) => {
    console.log(data);
  })
}

function fsWatcher() {
  useStream(watcherStream());
  useTrigger(fileTrigger);
  console.log(`Registered success!`);
}

register(fsWatcher);