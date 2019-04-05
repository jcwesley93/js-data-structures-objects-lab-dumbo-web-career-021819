// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, newKey, value){
    return Object.assign({}, driver, {[newKey]: value})

} //did not modify the original driver 

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   Object.assign(driver, {[key]: value})
   return driver

   // driver[key] = value also works 
}

function deleteFromDriverByKey(driver, key){
    let newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}
function destructivelyDeleteFromDriverByKey(driver, newKey){
    delete driver[newKey]
    return driver
}

//you have to use bracket notation when you are passing through parameters. 