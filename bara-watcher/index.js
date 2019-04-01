const {useStream} = require('bara');
const {watcherStream} = require('./watcher.stream');
const {useMediaFilterCondition} = require('./watcher.condition');

module.exports = {
  useBaraWatcher: config => {
    const {watchDir} = config;
    useStream(watcherStream, {watchDir});
  },
  useMediaFilterCondition,
};
