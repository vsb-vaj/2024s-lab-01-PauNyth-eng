// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
export const drawTriangle = (length = 5) => {
  
  let result = "";
  for (let i = 1; i <= length; i++) {
    result = "";
    for (let j = 1; j <= i; j++) {
      result += "* ";
    }
    console.log(result);
  }
};

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
export const drawJavascriptWord = (word = "javascript") => {
  // ... write code ...
  const length = word.length;
  for (let i = length; i >= 0; i--) {
    let line = '';
    for (let j = length - 1; j >= 0; j--) {
      if (j >= i) {
        line += word[j].toUpperCase() + ' ';
      } else {
        line += '* ';
      }
      
    }
    console.log(line.trimRight().split('').reverse().join(''));
  }
};


// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
export const getVehiclesAndTopSpeed = (vehicles) => {
  // ... write code ...
  return vehicles.map((vehicle) => {
    return {
      name: vehicle.name,
      topSpeed: Math.max(...vehicle.measuredSpeeds),
    };
  });  
};