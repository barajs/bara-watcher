const {parse} = require('path')
const {ON_FILE_ADDED, ON_FILE_DELETED} = require('./watcher.event');

const fileTypeChanged = (type) => (eventData) => {
  const {payload: path, eventType} = eventData;
  console.log('Condition fileTypeChanged: ', eventData);
  const pathData = parse(path);
  return eventType === ON_FILE_ADDED && pathData.ext.contains(type);
}

const mediaFileDeleted = (type) => (eventData) => {
  const {payload: path, eventType} = eventData;
  console.log('Condition mediaFileDeleted: ', eventData);
  const pathData = parse(path);
  return eventType === ON_FILE_DELETED && pathData.ext.contains(type);
}

module.exports = {fileTypeChanged, mediaFileDeleted}