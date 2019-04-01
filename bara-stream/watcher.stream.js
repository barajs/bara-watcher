const path = require('path');
const chokidar = require('chokidar');
const {ON_FILE_ADDED, ON_FILE_DELETED} = require('./watcher.event');

const watcherStream = () => {
  return {
    name: 'Bara Watcher',
    eventTypes: [ON_FILE_ADDED, ON_FILE_DELETED],
    setup: ({emit}) => {
      const watchDir = '/app/.data'; //path.resolve(__dirname, '.data');
      console.log(watchDir);
      const watcher = chokidar.watch(watchDir);
      
      watcher.on('add', (path) => {
        emit(ON_FILE_ADDED, path);
      });
      
      watcher.on('unlink', (path) => {
        emit(ON_FILE_DELETED, path);
      });
    }
  }
}

module.exports = {watcherStream};