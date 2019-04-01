const path = require('path');
const chokidar = require('chokidar');
const {ON_FILE_ADDED, ON_FILE_DELETED} = require('./watcher.event');

const watcherStream = () => {
  return {
    name: 'Bara Watcher',
    eventTypes: [ON_FILE_ADDED, ON_FILE_DELETED],
    setup: ({emit}) => {
      const watchDir = path.resolve(__dirname, 'examples');
      console.log(watchDir);
      const 
    }
  }
}

module.exports = {watcherStream};