const chokidar = require('chokidar');
const {ON_FILE_ADDED, ON_} = require('./watcher.event');

const watcherStream = () => {
  return {
    name: 'Bara Watcher',
  }
}

module.exports = {watcherStream};