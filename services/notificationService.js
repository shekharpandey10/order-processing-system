const {eventBus}=require('../events/event')


eventBus.on('order:shipped',(order)=>{
    console.log(`customer notified`)
})

eventBus.on('order:failed',(order)=>{
    console.log(`customer notification sent failed`)
})