const path = require('path');
const chokidar = require('chokidar');
const {ON_FILE_ADDED, ON_FILE_DELETED} = require('./watcher.event');

const watcherStream = {
  name: 'Bara Watcher',
  eventTypes: [ON_FILE_ADDED, ON_FILE_DELETED],
  setup: ({emit, options}) => {
    const {watchDir} = options

    const watcher = chokidar.watch(watchDir, {
      ignoreInitial: true,
    });
    console.log(`Registered chokidar at: ${watchDir}`);

    watcher.on('add', path => {
      console.log('Stream - a file added: ', path);
      emit(ON_FILE_ADDED, path);
    });

    watcher.on('unlink', path => {
      console.log('Stream - a file deleted: ', path);
      emit(ON_FILE_DELETED, path);
    });
  },
};

module.exports = {watcherStream};
