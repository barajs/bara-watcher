const {useStream} = require('bara');
const {watcherStream} = require('./watcher.stream');

module.exports = {
  useBaraWatcher: config => {
    const {watchDir} = config;
    useStream(watcherStream, {watchDir});
  },
};
