const {eventBus}=require('../services/event')

eventBus.on('order:created',(order)=>{
     console.log('[Payment] Payment requested');

     setTimeout(() => {
        const sucess=Math.random()>0.3;

        if(!sucess){
            eventBus.emit('payemt:failed',order);
            return
        }

        eventBus.emit('payment:success',order)
     }, 1000);
})

