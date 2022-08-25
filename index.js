// Code your solution here
function findMatching(drivers,message){
    return drivers.filter(function(driver){
        return driver===message || driver===message.toLowerCase()
    })
}

function fuzzyMatch(drivers,string){
    return drivers.filter(function(retutnValue){
        return retutnValue[0]===string[0]
    })
}

function matchName(drivers,string){
    return drivers.filter(function (newValue){
        return newValue['name']===string
    })
}