const {register, useStream, useTrigger, useEvent, useCondition, useAction} = require('bara');
 
const ON_TIME_ESLAPSED = 'ON_TIME_ESLAPSED';
 
const EVERY_X_SECOND = (x) => (triggeringEvent) => triggeringEvent.payload % x === 0;
const ONLY_EVEN_SECOND = (triggeringEvent) => triggeringEvent.payload % 2 === 0;

const timeElapsedStream = () => {
  return {
    name: 'Tik Tok',
    eventTypes: [ON_TIME_ESLAPSED, 'Hello', 'world'],
    setup: ({emit}) => {
      let elapsed = 0;
      const timer = setInterval(() => {
        emit(ON_TIME_ESLAPSED, elapsed++);
      }, 1000);
    },
  }
}
 
const everyTwoSecondsTrigger = {
  name: 'Console Every Two Seconds',
  event: useEvent(ON_TIME_ESLAPSED),
  condition: useCondition(ONLY_EVEN_SECOND),
  action: useAction(({payload}) => {
    console.log(`Console every two seconds: ${payload}`);
  }),
};

const everyXSecondsTrigger = {
  name: 'Console Every 20 Seconds',
  event: useEvent(ON_TIME_ESLAPSED),
  condition: useCondition(EVERY_X_SECOND(5)),
  action: useAction(({payload}) => {
    console.log(`Console every 5 seconds: ${payload}`);
  }),
};
 
const tikTokApp = () => {
    useStream(timeElapsedStream);
    console.log('Meo');
    useTrigger(everyXSecondsTrigger);
}
 
register(tikTokApp);