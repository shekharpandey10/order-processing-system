require('./services/paymentService')
require('./services/inventoryService')
require('./services/auditService')
require('./services/notificationService')
require('./services/shippingService')

const {eventBus}=require('./events/event')


eventBus.on('payment:failed',(order)=>{
    console.log('system failed')
    eventBus.emit('order:failed',order)
})

eventBus.on('inventory:failed',(order)=>{
    console.log('[inventory] system failed')
    eventBus.emit('order:failed',order)
})