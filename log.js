let { log } = require("./fakeData")

/**
 * Increments log getRequests for specified userId. If userId is not provided, increments all logs.
 */
const incrementGetRequestLog = ( userId ) => {
    if (userId === undefined) {
        log = log.map(item => ({
            ...item,
            getRequests: item.getRequests + 1
        }))    
    } else {
        log = log.map(item => {
            if (item.id === userId) {
                return {
                    ...item,
                    getRequests: item.getRequests + 1
                }
            }
            
            return item
        }) 
    }
}