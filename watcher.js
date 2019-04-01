const {join} = require('path');
const {
  register,
  useStream,
  useEvent,
  useCondition,
  useAction,
  useTrigger,
} = require('bara');
const {useBaraWatcher, useMediaFilterCondition} = require('./bara-watcher');
const {
  ON_FILE_ADDED,
  ON_FILE_DELETED,
} = require('./bara-watcher/watcher.event');

const fileAddTrigger = {
  name: 'File Add Trigger',
  event: useEvent(ON_FILE_ADDED),
  condition: useMediaFilterCondition('mp4'),
  action: useAction(data => {
    console.log('File added: ', data);
  }),
};

const fileDeleteTrigger = {
  name: 'File Delete Trigger',
  event: useEvent(ON_FILE_DELETED),
  condition: useMediaFilterCondition('mp3'),
  action: useAction(data => {
    console.log('File deleted: ', data);
  }),
};

function fsWatcher() {
  useBaraWatcher({watchDir: join(__dirname, '.data')});
  useTrigger(fileAddTrigger);
  useTrigger(fileDeleteTrigger);
  console.log(`Registered success!`);
}

register(fsWatcher);
