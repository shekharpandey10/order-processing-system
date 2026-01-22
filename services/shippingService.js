const {eventBus}=require('../events/event')

eventBus.on('inventory:reserved',(order)=>{

    console.log('shipping order')
    
    setTimeout(() => {
        eventBus.emit('order:shipped',order)
    }, 500);
})