const path = require('path');
const chokidar = require('chokidar');
const {ON_FILE_ADDED, ON_FILE_DELETED} = require('./watcher.event');

const watcherStream = () => {
  return {
    name: 'Bara Watcher',
    eventTypes: [ON_FILE_ADDED, ON_FILE_DELETED],
    setup: ({emit}) => {
      const watchDir = '/app/.data';
      
      const watcher = chokidar.watch(watchDir);
      
      watcher.on('add', (path) => {
        debugger;
        emit(ON_FILE_ADDED, path);
      });
      
      watcher.on('unlink', (path) => {
        debugger;
        emit(ON_FILE_DELETED, path);
      });
    }
  }
}

module.exports = {watcherStream};