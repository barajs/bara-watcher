const path = require('path');
const chokidar = require('chokidar');
const {ON_FILE_ADDED, ON_FILE_DELETED} = require('./watcher.event');

const watcherStream = () => {
  return {
    name: 'Bara Watcher',
    eventTypes: [ON_FILE_ADDED, ON_FILE_DELETED],
    setup: ({emit}) => {
      const watchDir = path.join(__dirname, '..', '.data');

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
};

module.exports = {watcherStream};
