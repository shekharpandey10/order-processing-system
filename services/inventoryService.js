const {eventBus}=require('../events/event')


eventBus.on('payment:success',(order)=>{
    console.log('[Inventory] Reserving items')


    setTimeout(() => {
            const inStock=Math.random()>0.2

            if(inStock){
                eventBus.emit('inventory:failed',order);
                return;
            }
            eventBus.emit('inventory:success',order)
    }, 1000);
})