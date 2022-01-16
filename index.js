

function distanceFromHqInBlocks(location) { 
    const myLocation = 42
    if(location <= myLocation){
        return myLocation - location
    } else{
        return location -myLocation
    }
};

function distanceFromHqInFeet(location){
   const blockInFeet = 264
   // we are at 42 and wanna go to 43 and the distance in feet is 264
   // in this test
   const blocks = distanceFromHqInBlocks(location)
   return blocks * blockInFeet
}

function distanceTravelledInFeet(start, end){
    const inFeet = 264
    let distance
    if(start >= end){
        distance = start - end 
    }else{
        distance = end - start
    }
    return distance * inFeet
}

 function calculatesFarePrice(start, destination){
      const distance = distanceTravelledInFeet(start, destination)
      const perFoot = 2
      if(distance <= 400){
          return 0
      }
 }