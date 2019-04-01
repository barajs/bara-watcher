const {register, useStream, useEvent, useCondition, useAction, useTrigger} = require('bara');
const {watcherStream} = require('./bara-stream/watcher.stream');
const {ON_FILE_ADDED, ON_FILE_DELETED} = require('./bara-stream/watcher.event');
const {fileTypeChanged, mediaFileDeleted} = require('./bara-stream/watcher.condition');

const fileAddTrigger = {
  name: 'File Add Trigger',
  event: useEvent(ON_FILE_ADDED),
  condition: useCondition(fileTypeChanged('mp4')),
  action: useAction((data) => {
    console.log('File added: ', data);
  })
}

const fileDeleteTrigger = {
  name: 'File Delete Trigger',
  event: useEvent(ON_FILE_DELETED),
  condition: useCondition(mediaFileDeleted('mp3')),
  action: useAction((data) => {
    console.log('File deleted: ', data);
  })
}

function fsWatcher() {
  useStream(watcherStream());
  useTrigger(fileAddTrigger);
  useTrigger(fileDeleteTrigger);
  console.log(`Registered success!`);
}

register(fsWatcher);