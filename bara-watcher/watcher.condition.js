const {useCondition} = require('bara');
const {parse} = require('path');
const {ON_FILE_ADDED, ON_FILE_DELETED} = require('./watcher.event');

const fileTypeChanged = type => eventData => {
  const {payload: path, eventType} = eventData;
  const pathData = parse(path);
  const cond = eventType === ON_FILE_ADDED && pathData.ext.indexOf(type) > -1;
  console.log('Condition fileTypeChanged: ', eventData, cond);
  return cond;
};

const mediaFileDeleted = type => eventData => {
  const {payload: path, eventType} = eventData;
  const pathData = parse(path);
  const cond = eventType === ON_FILE_DELETED && pathData.ext.indexOf(type) > -1;
  console.log('Condition mediaFileDeleted: ', eventData, cond);
  return cond;
};

const useMediaFilterCondition = type => {
  return useCondition(fileTypeChanged(type));
};

module.exports = {useMediaFilterCondition};
