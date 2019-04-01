const {parse} = require('path')

const fileTypeChanged = (type) => (eventData) => {
  const {payload: path} = eventData;
  const pathData = parse(path);
  return pathData.ext.contains(type);
}

module.exports = {fileTypeChanged}