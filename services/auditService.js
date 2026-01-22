const {eventBus}=require('../events/event')


eventBus.onAny=function (event, payload) {
  console.log(`[Audit] Event: ${event}`, payload.id);
};

const originalEmit=eventBus.emit

eventBus.emit=function(event,payload){
    eventBus.onAny(event,payload);
    return originalEmit.call(eventBus,event,payload)
}