// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(streetOne, streetTwo){
  return Math.abs(streetOne - streetTwo) * 264
}

function calculatesFarePrice(streetOne, streetTwo){
  const distance = distanceTravelledInFeet(streetOne, streetTwo)
  if(distance <= 400){
    return 0
  } else if(distance <= 2000){ 
    return (distance - 400) * 0.02
  } else if(distance > 2000 && distance <= 2500){
    return 25
  } else {
    return 'cannot travel that far'
  }
}